### Playwright Test Runner With Cucumber JavaScript

An example project showcasing the automation of web validation through the integration of Playwright and CucumberJS, utilizing the Page Object Model (POM) pattern.

#### System Under Test

We are using https://www.saucedemo.com/ as the System Under Test.

- URL: https://www.saucedemo.com/
- OS : Windows
- IDE : Visual Studio Code

#### Scenarios

```bash
  @tagRegression @P0 @validLogin
  Scenario Outline: Login with valid credentials
    Given I am on the login screen
    When I fill the login form with valid username "<username>"
    Then I should be able to see the home screen

    Examples:
      | username                |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |
      | error_user              |
      | visual_user             |
```

```bash
  @tagRegression @P0 @invalidLogin
  Scenario: Login using vaild user but invaild password credentials
    Given I am on the login screen
    When I fill the login form with valid username "locked_out_user"
    Then I should see error "Epic sadface: Sorry, this user has been locked out."
```

```bash
  @tagRegression @P0 @invalidLogin
  Scenario Outline: Invalid Login
    Given I am on the login screen
    When I fill the login form with "<username>" and "<password>"
    Then Verify error message "<errormessage>" is shown
    Examples:
      | username        | password       | errormessage                                                              |
      | wrong_user      | wrong_password | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | wrong_password | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | wrong_password | Epic sadface: Username and password do not match any user in this service |
      |                 |                | Epic sadface: Username is required                                        |
```

#### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/jijojose1691/playwright_samples.git
```

Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

Run tests

```bash
npm run test
```

#### Test Report

The report will be accessible within the "report" directory following execution.
