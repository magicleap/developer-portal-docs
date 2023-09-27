param(
    [string]$currentVersion
)

# Extract projectVersion from docusaurus.config.js
$docusaurusConfig = Get-Content -Path "./docs-versions.json" | ConvertFrom-Json
$projectVersion = $docusaurusConfig.current.label

$projectVersion = $projectVersion -replace ' ', '-'

Write-Host "projectVersion $projectVersion"

# Extract previousVersion from ./versions.json
$previousVersion = (Get-Content -Path "./versions.json" | ConvertFrom-Json)[0]

Write-Host "previousVersion $previousVersion"
Start-Sleep -Seconds 5.0

# 1. Run the yarn command and wait for it to complete
Start-Process -FilePath "cmd.exe" -ArgumentList "/c", "yarn", "docusaurus", "docs:version", "$projectVersion" -NoNewWindow -Wait

Start-Sleep -Seconds 5.0

# 2. Remove the previous-version directory
Remove-Item -Path "./versioned_docs/version-$previousVersion" -Recurse -Force

# 3. Remove the previous-version JSON file
Get-ChildItem -Path "./versioned_sidebars/" -Filter "*$previousVersion*.json" | Remove-Item -Force

Start-Sleep -Seconds 5.0


# 4. Edit the docusaurus.config.js file
$currentVersionWSpaces = $currentVersion -replace "-", " "
$projectVersionWSpaces = $projectVersion -replace "-", " "
# Load the config file and convert it to an object
$config = Get-Content -Path "./docs-versions.json" | ConvertFrom-Json

# Edit the object properties
$config.current.label = $currentVersionWSpaces

if ($config.PSObject.Properties.Name -contains $previousVersion) {
    # Convert $config to a PSCustomObject to allow modifying properties
    $config = [PSCustomObject]$config
    # Add the new version (projectVersion) to the JSON
    $config | Add-Member -NotePropertyName $projectVersion -NotePropertyValue @{ label = $projectVersionWSpaces } -Force
    # Remove the previous version from the JSON
    $config.PSObject.Properties.Remove($previousVersion)
}

# Convert the object back to a JSON string
$json = $config | ConvertTo-Json

# Write the JSON string back to the file
Set-Content -Path "./docs-versions.json" -Value $json

# 5. Iterate through all .md files and replace the text
$mdFiles = Get-ChildItem -Path "./versioned_docs/version-$projectVersion/" -Filter "*.md" -Recurse
foreach ($file in $mdFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    $content = $content -replace '\(/docs/', "(/versioned_docs/version-$projectVersion/"
    $content = $content -replace '\(/unity-api/', "(/versioned_docs/version-$projectVersion/unity-api/"
    $content = $content -replace '\(/guides/', "(/versioned_docs/version-$projectVersion/guides/"
    $content = $content -replace '\(/api-ref/', "(/versioned_docs/version-$projectVersion/api-ref/"
    Set-Content -Path $file.FullName -Value $content
}

Start-Sleep -Seconds 2.0
# 6. Remove the previousVersion from the ./versions.json array
$versions = Get-Content -Path "./versions.json" | ConvertFrom-Json
$updatedVersions = $versions | Where-Object { $_ -ne $previousVersion }
$updatedVersions | ConvertTo-Json | Set-Content -Path "./versions.json"

$version2 = Get-Content -Path "./versions.json" | ConvertFrom-Json
$version2 = "[`n" + "`"" + $version2 + "`"" + "`n]"
Set-Content -Path "./versions.json" -Value $version2