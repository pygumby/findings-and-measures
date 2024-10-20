> ### 🚨 My GitHub account name and domain have changed since I created this repository!
> **When I originally created this repository, my GitHub account was `@lkbaerenfaenger` and my domain was `lkbaerenfaenger.com`.
> These might be referenced within this repository.
> Note that my current GitHub account is `@pygumby` and my current domain is `pygumby.com`.**

# findings-and-measures

The Findings & Measures app enables supervisors to manage incompliances of supervised entities

## Run locally

```
pnpm install
pnpm run dev
```

## Run Docker container

```
docker image build --tag findings-and-measures .
docker container run --publish 5173:5173 findings-and-measures
```
