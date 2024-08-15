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
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>

          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2">
          Welcome to Flashcard SaaS!
        </Typography>

        <Typography variant="h5">
          {" "}
          The easiest to make flashcards from your text
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4">
          Features
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            {""}
            <Typography>Simply input your text andx let us do the rest. Creating flashcards has neverbeen easiers</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            {""}
            <Typography>Our AI intelligently breaks down your text into concise flashcards, perfect for quality studying sessions</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            {""}
            <Typography>Access your flashcards from any device, at any time. Study on the go with ease</Typography>
          </Grid>
        </Grid>

      </Box>

      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4">
          Pricing
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
            sx={{
              p:3,
              border: "1px solid",
              borderColor:"grey.300",
              borderRadius: 2,

            }}>
              <Typography variant="5">Basic</Typography>
              <Typography variant="h6">$5 / month</Typography>
              <Typography>Access to basic flashcard features and limited storage</Typography>
              <Button variant="contained" color="primary">
                {" "}
                Choose basic
              </Button>
            </Box>
            
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            {""}
            <Typography>Our AI intelligently breaks down your text into concise flashcards, perfect for quality studying sessions</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            {""}
            <Typography>Access your flashcards from any device, at any time. Study on the go with ease</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
