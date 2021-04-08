# Full Stack Interview Project: Investor Site Enhancements

## Hello and Welcome!

If you are reading this then you're probably talking to us about a technical role at [Pure](https://purepm.co). If so, congratulations!

In order to move forward, we'd like to know a little about how you work. To that end, this repository contains a **short, time-boxed** (approximately 2 hours) that you can use demonstrate your skills and abilities.

We follow a lightweight agile development process at Pure, and so have presented a small set of user stories to work through. There is no grading or scoring, nor is it pass-fail, rather these are meant to serve a sample of your reductive thought processes as an engineer.

## A few words on asynchronous/take-home exercises

We know that the technical hiring processes in our industry are still evolving. Acknowledging that there are mixed opinions on take-home exercises in general, we have chosen this route to give you the most flexibility and to respect the time investment that you're making in seeking this role.

*  We're a fully-remote team, currently all based within continental US, but spread across multiple time zones. Async exercises allow you to show off your skills at a time/place that works for you.

*  Take-home exercises allow you to work at your own pace. We intentionally structure these to take around 1h 30m in time and ask that you limit your investment to no more than the suggested time, however you are free to break this into as many sessions as you wish.

* It matches the nature of our work. Most of being an engineer on a remote team is self-directed exploration of a problem, followed by period(s) of cyclic work/edit/review, followed by submittal for review and approval by your peers. Async exercises allow you to do the same.

* It eliminates the performance anxiety of forced-pairing with someone whom you've just met.

## General Instructions

1. We would like you to work through the User Stories below, adding the relevant functionality to the application.

2. **Create a fork** of the repository **in your own GitHub account**, and **add @PureEngHiring** as a private collaborator.

3. When you are comfortable with your changes notify us through GitHub or, email us at careers@purepm.co and we'll review it withn 48 hours and respond back to you with objective feedback.

4. We are particularly interested in your approach to **testing**, and how you **factor** your code for **readability and extensibility** by others.

5. Complete as much of the exercise as you can in 2 hours or less. Don't worry if you don't complete all of the stories.

## Tech setup

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

