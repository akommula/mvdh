# Monta Vista Digital Humanities

Source code for the website [mvdh.club](mvdh.club).

## Maintenance information

Use `yarn` instead of `npm`.

Information on the website is sourced from
[spreadsheet](https://docs.google.com/spreadsheets/d/1udpjEu0hQhlEmSb0d92PwAiI8H-JYgM8Dk8mO9Bdt6A/edit).

You may need to generate credentials on Google API. See
[here](https://www.gatsbyjs.com/plugins/gatsby-source-google-spreadsheets/) for
more information.

Go to Google Sheets API, go to credentials, click on the
service account and create a new key. Store the credentials in
`app/client_secret.json` (so it is gitignored) and run

```zsh
export GOOGLE_APPLICATION_CREDENTIALS=$(cat client_secret.json)
```
