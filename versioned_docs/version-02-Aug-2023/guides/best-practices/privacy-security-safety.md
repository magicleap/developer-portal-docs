---
title: Privacy, Security & Safety Best Practices
sidebar_position: 10
date: 07/25/2023
tags: [Privacy, Security, Safety]
keywords: [Privacy, Security, Safety]
---

## Overview

Magic Leap supports and encourages the development and distribution of applications that can be used on or with Magic Leap 2 devices. However, as an open platform focused on choice and ease of use, the ultimate success of each application depends largely on the relationship you (as an application developer) have with your enterprise customer and each individual end user. Part of this overall relationship includes how you manage privacy, security, and safety within your applications. For example, as a developer, you may have access to important information including sensitive personal data (e.g., eye tracking data) or confidential enterprise data (e.g., spatial maps of a classified work environment) and you are responsible for the means through which your application collects, uses and stores such data.

Although Magic Leap 2 was built with privacy, security and safety features in mind, it is the role and responsibility of each individual developer to understand those features (and their limitations), integrate them properly within their applications, and take other measures deemed necessary to protect end users.

Below are a few best practices we recommend to help you build privacy, security and safety directly into your applications:

**1. Comply with applicable law and industry standards**
  
  a.  Comply with all applicable laws, regulations, and policies, including those pertaining to privacy and data security.
  
  b.  Comply with generally recognized best practices applicable to your application’s industry and specific use case.
 
  c.  Do not use intellectual property that you do not either own or have a license to use.

**2. Clearly disclose your data privacy practices**
  
   a. Provide a clear and transparent privacy policy that explains among other information, what data you collect, how you use it, for what purposes, applicable retention policies, and whether any data is shared with other parties.
  
   b. Use data in a manner consistent with your application’s privacy policy and any applicable user permissions.
  
   c. Update your application’s privacy policy and obtain user permission prior to adopting new data practices or implementing new features or services which may impact user privacy.
  
   d. Provide appropriate privacy-related indicators to end users and potential bystanders when enabling recording or processing data off-device.
  
   e. Do not sell or license any data collected.
  
   f. Do not use data for profiling, behavioral analysis, or to discriminate against an end user.
  
   g. Stay up to date with privacy practices in your industry and specific use cases.

**3. Obtain user permission before accessing data**
 
   a. Build trust by obtaining user permission before collecting, using and sharing data.

   b. Ensure default settings are designed to be protective of user privacy.
  
   c. Requests for permission should be presented when first needed to implement a current feature or service in your application so that end users understand why your application is requesting the permission.
  
   d. Requests for permission should be clearly stated and provide the user with an explanation as to why your application needs a given permission so that the user can feel confident granting permission to your application.
  
   e. Requests for permission should be made prior to collecting any information to improve your products and services such as data analytics.
  
   f. Provide controls that allow end users to manage their data and privacy preferences, such as an ability to opt-out of data collection or be presented with an explanation as to why the feature cannot function without the stated data collection.

**4. Minimize the data you collect**
  
   a. Use the minimum amount of data needed to accomplish a given task and do not collect, store, transmit or otherwise use any data that is not required.
  
   b. Data should be anonymized and/or aggregated where possible.
  
   c. Data should not be used for any purpose other than the functioning or performance of your application consistent with user expectations, and should not be combined with any data set not related to the functioning of your application.
  
   d. Data should only be shared with a third party that uses the data to provide services related to your application’s functionality.
  
   e. Do not use data for the purposes of identifying a non-user, such as using sensor data (e.g., images, video or audio) for the purposes of biometric identification of non-users or any other computer vision processing to identify non-users.
  
   f. Do not use any techniques to fingerprint the device, or for any cross-device or cross-application tracking.
  
   g. Do not attempt to collect data about other applications or services running on a device.
  
   h. Provide users a right to access, modify, and erase personal data.
  
   i. Avoid storing data for longer than needed to perform the task. Follow a data retention policy to ensure data that is no longer needed is deleted after a set time period. 

**5. Security by design**

   a. Adopt and maintain reasonable data security practices for your application’s industry and specific use case including the means through which your application collects, uses and stores the data about or relating to your end users.
 
   b. Consider security at every stage of your application’s development and distribution.
 
   c. All non-confidential and non-sensitive data should be stored in your application's internal storage. Use secure storage application programming interfaces (APIs) to store confidential or sensitive information, including private keys. Applications should not log data in the system or application-specific log.
 
   d. Use industry standard encryption (e.g., TLS) anytime your application stores or transmits usernames, passwords, API keys, or other types of important data about or on behalf of your end users.
  
   e. Only call documented APIs. Do not store locally or remotely any data received from APIs (e.g., photos, PII, sensor info), unless user consent has been obtained and such storage method has been specifically mentioned within your application’s privacy policy.
  
   f. Research how our operating system is configured and be sure to adapt your code accordingly when porting applications from other platforms to account for differences in APIs, security-related features and required permissions.
  
   g. Use due diligence on libraries and other third-party code that you use to build or augment your application.
  
   h. Follow Android’s “App security best practices” documentation currently available at: https://developer.android.com/topic/security/best-practices.
  
   i. Use industry standard penetration testing to identify potential security vulnerabilities from use of your application and take appropriate steps to ensure all security vulnerabilities have been mitigated to an acceptable level.
  
   j. Stay up to date with security practices in your industry and specific use cases.

**6. Safety by design**
  
   a. Provide appropriate safety-related indicators to end users and potential bystanders, where possible.
  
   b. Provide written documentation to end users describing your application’s intended use cases including appropriate warnings regarding end user safety. 
  
   c. Design features that prevent accidents, injuries or other safety hazards. Applications should not endanger the physical safety of end users or create a scenario where physical harm is likely. 
  
   d. Do not direct end users to use a Magic Leap 2 device that contradicts the intended use of the Magic Leap 2 device or intentionally increases the risk of damaging the device.
  
   e. Notify end users if your application overrides any system settings (e.g., dimming) on their Magic Leap 2 device and when those overrides will occur, and why.
  
   f. Conduct an appropriate risk management process to identify all potential hazards to the user from use of your application. Perform the required testing to ensure all hazards have been mitigated to an acceptable level.
  
   g. Stay up to date with safety practices in your industry and specific use cases.

**7. Offer Support**
  
   a. Provide your enterprise customers and end users with a method of communication for questions, concerns or complaints related to your application including for user feedback, security vulnerabilities, and requests for access, modification or erasure of data. 
  
   b. Do not suggest that enterprise customers or end users contact Magic Leap for issues related to your application. Magic Leap is not responsible for providing any maintenance or support in connection with your application.

