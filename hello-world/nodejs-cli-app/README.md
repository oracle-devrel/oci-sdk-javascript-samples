# Simple NodeJS CLI App - OCI JavaScript SDK Sample

[![License: UPL](https://img.shields.io/badge/license-UPL-green)](https://img.shields.io/badge/license-UPL-green) [![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=oracle-devrel_oci-sdk-java-samples)](https://sonarcloud.io/dashboard?id=oracle-devrel_oci-sdk-java-samples)

## Introduction
Software Development Kits (SDKs) Build and deploy apps that integrate with Oracle Cloud Infrastructure services. Each SDK provides the tools you need to develop an app, including code samples and documentation to create, test, and troubleshoot. In addition, if you want to contribute to the development of the SDKs, they are all open source and available on GitHub.

This project sample helps developers to setup their first OCI SDK based NodeJS application.

## Cloning this Sample
```
git init nodejs-cli-app
cd nodejs-cli-app
git remote add origin https://github.com/oracle-devrel/oci-sdk-javscript-samples.git
git config core.sparsecheckout true
echo "hello-world/nodejs-cli-app/*">>.git/info/sparse-checkout
git pull --depth=1 origin main
cd hello-world/nodejs-cli-app/
```

## Installation

You need install the pre-requirements for run this example.

```
$ npm install
```

## Running the Program

```
node list-instance.js
```
This will print all the instances from the root tenancy in `US-ASHBURN-1` region. The tenancy info is retrieved from OCI config.

## References
* [OCI JavaScript SDK - Documentation](https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/typescriptsdk.htm)
* [OCI SDK - Official Documentation](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/sdks.htm)

## Contributors
* Author: Ashok Raja CM
* Collaborators: NA
* Last Review: Aug 2022

## Contributing
This project is open source.  Please submit your contributions by forking this repository and submitting a pull request!  Oracle appreciates any contributions that are made by the open source community.

## License
Copyright (c) 2022 Oracle and/or its affiliates.

Licensed under the Universal Permissive License (UPL), Version 1.0.

See [LICENSE](../../LICENSE) for more details.

ORACLE AND ITS AFFILIATES DO NOT PROVIDE ANY WARRANTY WHATSOEVER, EXPRESS OR IMPLIED, FOR ANY SOFTWARE, MATERIAL OR CONTENT OF ANY KIND CONTAINED OR PRODUCED WITHIN THIS REPOSITORY, AND IN PARTICULAR SPECIFICALLY DISCLAIM ANY AND ALL IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE.  FURTHERMORE, ORACLE AND ITS AFFILIATES DO NOT REPRESENT THAT ANY CUSTOMARY SECURITY REVIEW HAS BEEN PERFORMED WITH RESPECT TO ANY SOFTWARE, MATERIAL OR CONTENT CONTAINED OR PRODUCED WITHIN THIS REPOSITORY. IN ADDITION, AND WITHOUT LIMITING THE FOREGOING, THIRD PARTIES MAY HAVE POSTED SOFTWARE, MATERIAL OR CONTENT TO THIS REPOSITORY WITHOUT ANY REVIEW. USE AT YOUR OWN RISK. 