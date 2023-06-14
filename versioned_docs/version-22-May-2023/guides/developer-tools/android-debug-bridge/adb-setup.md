---
id: adb-setup
title: ADB Setup
sidebar_position: 1
date: 05/02/2022
tags: [Android Debug Bridge, adb, command line]
keywords: [Android Debug Bridge, adb, command line]
---

## How to install Android Debug Bridge (ADB)

This section includes condensed install instructions to help developers get started. The latest information about ADB can be found on [Android's Developer Website](https://developer.android.com/).

### Check for Existing ADB Installations

Open your command line program and run `adb devices`. If it returns `List of devices attached`, adb is already installed and no additional steps are needed. Otherwise, go to the section that lists your operating system.

### Windows

If you do not have Android Studio installed, you can download the required tools from the Android Development Website:

1. [Download the Android SDK Platform Tools .zip file for Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip).
2. Extract the contents of this .zip file into an easily accessible folder, such as `C:\platform-tools`

After you install Android Studio or the platform tools .zip file, add the path to the Platform Tools directory in your environment variables so that the `adb` command can be run from anywhere.

1. Go to **Start** > **Control Panel** > **System** > **Advanced System Settings** > **Environment Variables**
2. Select the `Path` variable in the **User Variables** section, then select **Edit**
3. In the **Edit environment variables** window, select **New**
4. For Android Studio add the following path to the environment variables:

```bash
%USERPROFILE%\AppData\Local\Android\sdk\platform-tools
```

5. If you are using the platform tools zip, add the path to environment variables that points to the directory that contains the zips extracted files.

```bash
C:\platform-tools
```

6. Close all of the command line windows  (if any open).
7. Reopen `cmd` and type `adb devices`. It should respond with `List of devices attached`. If it does not, restart your PC.

### MacOS

#### Option 1: Using Homebrew

1. Open the terminal and run:

```bash
brew install --cask android-platform-tools
```

2. Run `adb devices` and verify that adb is a recognized command.

#### Option 2: Using Android Studio

If you've already installed Android Studio, add the SDK tools to your system path by doing the following:

:::note
If you are using zsh then replace `.bash_profile` with `.zshrc`
:::

1. Open terminal and run:

```bash
touch ~/.bash_profile
```

2. Then run:

```bash
open ~/.bash_profile
```

3. Then add the following:

```bash
export ANDROID_SDK_ROOT=/Users/$USER/Library/Android/sdk
export PATH=${PATH}:$ANDROID_SDK_ROOT/tools:$ANDROID_SDK_ROOT/platform-tools
```

4. Refresh your bash profile (or restart your terminal app):

```bash
source ~/.bash_profile
```

5. Run `adb devices` and verify that adb is a recognized command.

### Linux

On linux you can install the Android Tools using apt by running the following command:

```bash
sudo apt install android-tools-adb
```

