import Image from "next/image";
import getStripe from "./utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material"
import Head from "next/head";



export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Flashcard SaaS created flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Flashcard SaaS
          </Typography>

          <SignedOut>
            <Button>Login</Button>
            <Button>Signup</Button>
          </SignedOut>

          <SignedIn>
            <UserButton/>
          </SignedIn>

        </Toolbar>
      </AppBar>
    </Container>
  );
}
