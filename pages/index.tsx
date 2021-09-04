import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import RegistrationForm from '@components/RegistrationForm';
import classes from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={classes.container}>
    <Head>
      <title>Link Vrains</title>
      <meta name="description" content="Test project" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={classes.header}>
      <h1 className={classes.title}>
        Welcome to the Link Vrains
      </h1>
    </header>
    <div className={classes.grid}>
      <p className={classes.description}>
        Get started by registering an account.
      </p>
      <RegistrationForm />
    </div>
    <footer className={classes.footer}>
      Link Vrains 2021
    </footer>
  </div>
);

export default Home;
