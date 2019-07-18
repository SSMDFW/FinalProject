# Zombie Apocolypse
#[![INSERT YOUR GRAPHIC HERE](https://www.maxim.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTM1MzIxOTMzMjIxNzM1MDQz/drsmith_zombies_article1jpg.jpg)]()


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Team Zombie](#team-zombie)
* [Purpose of the Analysis](#purpose-of-the-analysis)
* [Methodology](#methodology)
* [Key Documents](#key-documents)
* [Findings](#findings)
* [Coding Style](#coding-style)
* [Coding Documentation](#coding-documentation)
* [API Calls](#API-calls)
* [Authors](#authors)
* [Acknowledgments](#acknowledgments)


# Team Zombie

Team Zombie found inspiration  for this project at the website: http://maxberggren.se/2014/11/27/model-of-a-zombie-outbreak/.  This website projects the spread of a hypothetically zombie outbreak that starts from a location in Sweden, Norway and Finland.  We will use this as a framework to model a zombie outbreak in the United States.  

Different viruses spread at different rates so we will use a sample of various viruses to evaluate the spread of the infections starting from our selected cities:  New York, Atlanta, Dallas, Denver and Los Angeles.  We chose these cities because they are major cities with a significant population that are in different regions across the United States and would be a good representation for the country.

We are using information from the Center of Disease Control and Prevention (https://wwwn.cdc.gov/norsdashboard/)includes incubation time and speed of the outbreak.  These parameters will be paired with one of the designated movies as a choice for the user to select.  This selection along with the user’s city choice will produce a visualization modeling the projected outbreak based on the designated parameters.



## Purpose of the Analysis

The purpose is to determine the rate of which a virus spreads within the US.  We focused our research on only human-to-human contact viruses and used variables such as speed, incubation and zip code population to determine the expected spread of the outbreak based on our predictive analysis. 

## Methodology

We found information for US populations based on zipcodes from https://data.world.  We are using population data from the year 2016 for our analysis.  We merged this with data from uszipcodes in the pandas library using the common zipcodes.  From this library, we were able to include city, state, latitude, longitude, and radius (miles).  We will compile this information  to use for our data analysis.


## Key Documents

The following data sets were used throughout the project.

### Vizsualization 1
[![INSERT YOUR GRAPHIC HERE]()]()

### Vizsualization 2
[![INSERT YOUR GRAPHIC HERE](https://)]()


### Vizsualization 3
[![INSERT YOUR GRAPHIC HERE]()]()






## Findings



## Next steps


## API Calls

API call: 


## Coding Style

Javascript programming language was used.

Python programming language was used, the list of dependencies are as follows:

```sh
import os
from bs4 import BeautifulSoup as bs
import requests
import pandas as pd

```


## Authors

S. Murphy- Initial Work - [SMU Team Crime- Project 2](https://github.com/rohithbhattaram)

Lori  - Initial Work - [SMU Team Crime- Project 2](https://github.com/ellisec)

Mabel Gutierrez- Initial Work - [SMU Team Crime- Project 2](https://github.com/mabel912)

Velindia Lucas - Initial Work - [SMU Team Crime- Project 2](https://github.com/chele0630)

