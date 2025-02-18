This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Hello Play North team!

## To run it!

```bash
npm i
```

```bash
npm run dev
```

### Features

#### Game lobby

The main page of the app at `/` where we can see the different lobbies and their categories. This links redirect us to the different pages for this categories where we can see their different page component and how they are linked to a component to be rendered with the page component information as props.

In `/features/page-mapper/index.ts` you can see an implementation where I am mapping the different page component types to a react component and the props are passed automatically for a scalable solution.

#### All Games 

In the `/games` page we can see a list of games that can be filteres and navigated using the provided parameters in the API.
