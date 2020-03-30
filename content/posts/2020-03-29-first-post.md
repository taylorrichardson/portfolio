---
template: post
title: Health Mobile Application Voice Assistant
slug: icare-voice-assistant
draft: false
date: 2018-10-01T23:58:44.307Z
description: >-
  Developed a voice assistant to help with mobile application's ease of use for
  patients with physical impairments.
category: Professional
tags:
  - Nativescript
  - Python
  - Flask
---
**iCare Home Health** was looking to build upon their current mobile application by updating and creating old and new back-end functionality for their mobile application, Health Espresso. [](<>)Completed by a team of student researchers including **myself**.



The primary goal of this project was to enhance the current Spoken Language Understanding (SLU) engine to be more robust and accurate. To accomplish this, an open source software called, Snips-NLU was leveraged. 



The Natural Language Understanding (NLU) platform developed by Snips includes a pipeline of NLU tasks including a deterministic and probabilistic intent parser-both of which include intent classification and slot filling. Entity resolution will be the final step to achieve more meaningful understanding of text. This new engine has given the application the ability to parse dates out of an intent and to use it to automatically set a reminder or an appointment. 



Both parts of the Artificial Intelligence are hosted on a flask server to send requests and retrieve the information. The project also included the deployment and integration of the final pieces of software, helping iCare Home Health to conclude with an application they can use to for their go to market strategies.