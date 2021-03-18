## Table of contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Localhost](#localhost)
- [Process for getting the website running locally](#process-for-getting-the-website-running-locally)
- [Branching and merging strategy](#branching-and-merging-strategy)

## General Info

This project is a website with two parts: the wiki and the map.

The wiki part contains pages for all countries, puppets and colonies and all their leaders, generals, equipment, battles, divisions and political situation in that country from 1933 to 1945.

The map part is an interactive map similar to google maps with countries and their puppets showed on the map painted according to their faction. The map shows the borders and frontlines for each day from October 1935 (start of the Italo-Ethiopian war) to September 1945 (end of WWII), and also shows the events that happened on a particular day.

## Process for getting the website running locally

To be determined.

## Branching and merging strategy

We are using Git-Flow's branch and merge strategy. The following rules should always always be followed when working on the project:

- Code in main must be deployable at all times.
- When you want to start work on a new task, create a new branch off the development branch and give it a descriptive name.
- Commit to that branch locally and push your branch at regular intervals to back up your work.
- Once you have completed your task you can create a pull request to have your changes reviewed before they are merged back into the development branch (You can also use a pull request as a review for work that is still in progress, these pull requests should never be merged however)
- Once the development cycle is complete then a release branch will be created off of development. Once this branch has gone through QA and any needed bug fixes are applied, it will be merged into master.
