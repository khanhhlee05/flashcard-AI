import Image from "next/image";
import getStripe from "./utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid } from "@mui/material"
import Head from "next/head";



export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Flashcard SaaS created flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard SaaS
          </Typography>

          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </SignedOut>

          <SignedIn>
            <UserButton/>
          </SignedIn>

        </Toolbar>
      </AppBar>

      <Box sx={{textAlign:"center", my:4}}>
        <Typography variant="h2">
          Welcome to Flashcard SaaS!
        </Typography>

        <Typography variant="h5">
          {" "}
          The easiest to make flashcards from your text
        </Typography>

        <Button variant="contained" color="primary" sx={{mt:2}}>
          Get Started
        </Button>
      </Box>

      <Box sx={{my:6}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>

        <Grid contained spacing={4}>
          <Grid item xs={12} md = {4}>
            <Typography variant="h6">Easy Text Input</Typography>
            {""}
            <Typography>Simply input your text andx let us do the rest. Creating flashcards has neverbeen easiers</Typography>
          </Grid>
          <Grid item xs={12} md = {4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            {""}
            <Typography>Our AI intelligently breaks down your text into concise flashcards, perfect for quality studying sessions</Typography>
          </Grid>
          <Grid item xs={12} md = {4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            {""}
            <Typography>Access your flashcards from any device, at any time. Study on the go with ease</Typography>
          </Grid>
        </Grid>

      </Box>
    </Container>
  );
}
