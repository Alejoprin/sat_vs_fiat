# Sat vs Fiat!

Ranking of currency exchange rates of different countries with respect to satoshi.

## Index

- [Problem to solve](#problem-to-solve)
- [Technologies used](#technologies-used)
- [Requirements](#requirements)
- [Functionality](#functionality)
  - [Ranking view](#ranking-view)
  - [Favorites countries](#favorites-countries)
  - [Satoshi Info](#satoshi-info)
  - [Converter](#converter)

## Problem to solve

I have not been able to find a page that will show me a ranking of sat/fiat exchange rates of countries in the world.

## Technologies used

  <table>
    <tr>
      <td><img src="https://img.shields.io/badge/html5%20-%23e34f26.svg?&style=for-the-badge&logo=html5&logoColor=white" /></td>
      <td>Semantic labels, Meta tags</td>
    </tr>
    <tr>
      <td><img src="https://img.shields.io/badge/CSS3-1572B6?&style=for-the-badge&logo=css3&logoColor=white" /></td>
      <td>FlexBox, Grid CSS, Custom properties</td>
    </tr>
    <tr>
      <td><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /></td>
      <td>SPA, AJAX, DOM manipulation, modules, localStorage</td>
    </tr>
  </table>

## Requirements

Smartphone or computer with a web browser installed and internet.

## Functionality

### Ranking view

<!-- https://alejoprin.github.io/No_te_pases_ma/assets/ReadmeInstall.png -->
<p align="center">
  <img src="app/assets/rank.png">
</p>

1. Options button.
1. Bitcoin and satoshis exchange rate against the dollar.
1. Top 3 currencies (arbitrarily selected).
1. Ranking.
1. Button to sort countries depending on exchange rate.
1. Button to add to favorites.

<br>

### Favorites Countries

<p align="center">
  <img src="app/assets/favoriteCountries.png">
</p>

List of favorite countries, where it shows; the country code, currency code, currency name, and the exchange rate against the Satoshi.

<br>

### Satoshi Info

<p align="center">
  <img src="app/assets/satoshiInfo.png">
</p>

Brief explanation of where the word satoshi comes from, and how to read it.

<br>

### Converter

<p align="center">
  <img src="app/assets/converter.png">
</p>

1. Button to select the country to perform the calculation.
1. Button to indicate the type of calculation: sat/fiat or fiat/sat.
