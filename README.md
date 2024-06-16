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
