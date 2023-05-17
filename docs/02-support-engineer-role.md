# Float Support Engineering

Welcome to the Float Candidate Assessment for __SupportEngineers__. Below is a brief detailing some background of the scenario followed by the assessment implementation instructions, grading rubric, and submission process.

## What are we building?

### Background & Introduction

We've been recently hired by __CBT of Lakeshore__ to help create an API service that will be used to integrate their custom electronic health records (EHR) to work with the Float payments product.

Our platform team has created a proof-of-concept API Service that exposes a `POST /check_vob` that returns `{"is_valid": true}` when a patient/user has coverage results (_currently just a mock_).  There are also endpoints to fetch __FrontEnd__ related information at `/frontend/dropdowns/` that can be used to power the react application.  

During the demo to the share-holders, the dropdowns weren't showing the correct information.  The InsuranceDropdown was missing the insurance carrier `Aetna`.  And the __ServiceOptions__ dropdown was non-operational.  You've been asked to help triage and identify the issue, if possible make the necessary adjustments or at least document the issue.

### Expectations

To begin to triage the work you will first need to setup the repository and ensure you can run the __nestjs__ application locally.

Next would be to run the test runner and verify the __Tests__ are passing, if there are failing tests these would be a great starting place to investigate.

There is also the expectation that `Aetna` needs added to the __Insurance__ dropdown

Open up a PullRequest using branch `solution` and add any implementation changes and adjustments to tests as needed.  Include a description outlining the issues and how the implementation addresses those issues.


#### Grading Rubric

We want to ensure you submit a successful solution so here is our assessment grading rubric.

|  | Task / Skill-Check   | Description                                                                         |
|---|-------------------|-------------------------------------------------------------------------------------|
| :thumbsup: | Code Complete        | Did you complete the assessment in it's entirety in terms of functionality          |
| :satellite: | API / Network Comms. | Were networking communications properly configured and handled                                 |
| :thought_balloon: | Pull-Request         | Open up a proper PR, **_read the submission process below_**                            |
| :shipit: | Commit History       | We value [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0)      |

## Submitting a Solution

### 1. Setting Up Your Solution

> __IMPORTANT:__ When you receive this zip file create your repository and __COMMIT__ the code as the `initial commit` inside of the _default branch_ `main` or `master`.

### 2. Create a Branch & PR

You should begin to build your solution on a new branch (_we don't care what you call it we recommend_ --  `solution`).  Once you are code complete, create a private repository and push up both branches.  And open up a pull-request against the _default branch_ `main|master`.

### 3. Finalize & Submit

Invite `mgan59`, `CMitchell08`, `ramirog89` to your repository so we can see your pull-request.  We also recommend assigning the PR to for review  so that we get notifications in our github-ui.

### 4. Review Process

Once the reviewers are added to the repository, we will conduct a quick PR review and setup a time to go over the code together.


---

> __Reminder__, see [readme](../README.md) for specific details on installation and repository contents 




