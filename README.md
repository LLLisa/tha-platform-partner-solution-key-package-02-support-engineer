# Float Backend NestJS Solution Template

Welcome to the Float Candidate Assessment, this repository serves as a basis for several different technical assessments involving our nestjs platform development.

You will want to refer to the `docs/` folder for the specific instructions regarding your assessment.  In each assessment brief there are details on the grading rubric and submission process, please read thoroughly.

- [02-support-engineer-role](./docs/02-support-engineer-role.md)

Additionally enclosed in this repository is a generated [NestJS](https://nestjs.com/) application which serves as the basis for our platform.

## Solution Template Getting Started

### Repository Contents

- Generated NestJS app
- Added `github-action` to run `npm tests`
- Added and configured [Validation / Pipes](https://docs.nestjs.com/pipes#schema-based-validation) _globally_ in `src/main.ts`
- Added `Coverage` Controller / Service, includes _tests_
- Added `Frontend` Controller, includes _tests_


### Requirements

- You have nodejs `14.x` or greater running locally with `npm > 5.x`
- You have a registered Github Account


### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


### Hit API

```
curl -d '{"example":"hello world"}'  http://localhost:3000/check_vob

curl http://localhost:3000/frontend/dropdowns/insuranceOptions

curl http://localhost:3000/frontend/dropdowns/serviceOptions
```




