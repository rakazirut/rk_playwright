# rk_playwright demo

[![CircleCI](https://circleci.com/gh/rakazirut/rk_playwright/tree/main.svg?style=svg&circle-token=8aef4c2189d06ea5a6499525a3071907ddd83e26)](https://circleci.com/gh/rakazirut/rk_playwright/tree/main)

Simple project for playwright demo. CircleCI workflows trigger on build and on schedule.

Running using docker-compose
1. Install [docker]('https://docs.docker.com/get-docker/') and [docker-compose]('https://docs.docker.com/compose/install/')
2. Create cypress container (it will also run after creation)
    - `docker-compose up playwright`
3. (Optional) To run again without rebuilding the container
    - `docker-compose run playwright`
4. (Optional) Afterward to tear down containers used
    - `docker-compose down`