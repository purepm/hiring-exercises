# Full Stack Interview Project: Investor Site Enhancements

## Hello and Welcome!

If you are reading this then you're probably talking to us about a technical role at [Pure](https://purepm.co). If so, congratulations!

In order to move forward, we'd like to know a little about how you work. To that end, this repository contains a **short, time-boxed** (approximately 2 hours) that you can use demonstrate your skills and abilities.

We follow a lightweight agile development process at Pure, and so have presented a small set of user stories to work through. As a pair-programming exercise, we will work with you as we extend, refactor and build upon the existing app, adding tests or assertions to cover our new behavior where reasonable to do so.

## General Instructions

1. We will work through the User Stories below, adding the relevant functionality to the application.

2. We are particularly interested in your approach to **testing**, and how you **factor** your code for **readability and extensibility** by others.

3. We will work together to complete as much of the exercise as feasible. While progress is important, we're more interested in your though process and how you work with others; so don't worry if you don't complete all of the stories.

## Tech setup

As a pair-programming exercise, your pair will have this all prepared in advance on their machine, ready for your session!

If you wish to familiarize yourself with the project in advance, read on!

The back-end service uses dockerized services, to save having to install each component on your machine locally. There's a good [Getting Started](https://www.docker.com/get-started) tutorial if you're not familiar with docker yet.

1. Clone a copy of the repository
2. Install the relevant tools in each of the `frontend` and `service` folders with `npm install`
3. In the `service` folder, create a `.env` file by copying the `.env.example` file e.g. `cp .env.example .env`
4. Spin up the backend service with `npm run docker:dev` in the `service` folder
5. Spin up the frontend app with `npm run dev` in the `frontend` folder
6. Visit `http://localhost:8000` and you should see a running app - Congratulations!

Additional notes on the server can be found in the [Service Folder](/service/README.md).

Any questions, drop us a line at careers@purepm.co.

### Seed Data

It may be useful to insert seed data into the running MongoDB instance. To do so, you can optionally install the [Mongo Seeding CLI](https://github.com/pkosiec/mongo-seeding/tree/master/cli) and follow instructions there to seed your Mongo instance.

There is sample seed data under the `/data` folder.

## Questions

Drop us a line at careers@purepm.co and we'll be happy to elaborate on anything here.

## User Stories
---
### Login failure isn't handled gracefully
**Context**

**As an** Investor
**I want** to know if I input incorrect credentials
**So that** I can check my input

**Acceptance Criteria**

**Given** I am not logged into the site

**When** I enter invalid credentials (Backend responds with HTTP 401 Not Authorized)

**Then** I should see an error notification that my login attempt was unsuccessful

---
### BUG Unauthenticated users can browse to the dashboard
**Expected Behavior**

Browsing to /dashboard redirects to login

**Actual Behavior**

Browsing to /dashboard renders empty page

**Acceptance Criteria**

**Given** I am not logged into the site

**When** I visit /dashboard

**Then** I should be redirect to login at the site root

---
### Investor Should be able to see Amount of Expected Return

**As an** Investor
**I want** to see headline stats about my account
**So that** I can review my investment at a glance

**Acceptance Criteria**

**Given** I am logged into the site

**When** I view the dashboard

**Then** I should see my Initial Investment amount listed in the headline stats

**And** I should see my Investment date listed in the headline stats in human readable format

**Also** I should see my projected value amount listed in the headline stats

**Dev Notes**

Projected value is calculated as:  P (1 + r/n)^(nt), where P is the initial principal balance, r is the interest rate, n is the number of times interest is compounded per time period and t is the number of time periods. It is assumed interest compounds on a monthly basis, i.e. 12 times a year. e.g.
P = 5000.
r = 5/100 = 0.05 (decimal).
n = 12.
t = 10.

A = 5000 (1 + 0.05 / 12) (12 * 10) = 8235.05.

---
### Investor Should be able to see Amount of Deposit/Withdrawal

**As an** Investor
**I want** to view the amount of transactions
**So that** I can easily track the balance

**Acceptance Criteria**

**Given** I am logged into the site

**When** I view the dashboard

**Then** I should see any account transactions listed

