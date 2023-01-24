import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { EnterpriseFooter } from '../../components/enterprise-footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 0),
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgb(237, 237, 238)',
  },
}));

export const Footer = () => {
  const { footer } = useThemeConfig();
  const classes = useStyles();

  if (!footer) {
    return null;
  }

  return (
    <footer className={classes.footer}>
      <EnterpriseFooter excludeLinks={['cookies']} />
    </footer>
  );
};
