# findings-and-measures

The Findings & Measures app enables supervisors to manage incompliances of supervised entities

## Run locally

```
pnpm install
pnpm run dev
```

## Run Docker container

```
docker image build --tag findings-and-measures:latest .
docker container run --detach --publish 5173:5173 --name findings-and-measures findings-and-measures:latest
```
