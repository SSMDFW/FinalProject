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

Different viruses spread at different rates so we will use different infection rates evaluate the spread of the infections starting from our selected cities:  New York, Atlanta, Dallas, Chicago and Los Angeles.  We chose these cities because they are major cities with a significant population that are in different regions across the United States and would be a good representation for the country.

We are using information from the Center of Disease Control and Prevention (https://wwwn.cdc.gov/norsdashboard/) to gather information the number of person-to-person outbreaks and the percentage of the population that gets regular check ups with the intent to see how this information would factor in to our outbreak spread.  After evaluating the k-means result, we found this information not to be pertinent factors and decided to focus on population and density instead.  

There are five movies that we selected to represent the spread of the outbreak across the US.  Using information from https://zombie.fandom.com/wiki/Zombie_Comparison_Chart, we found outbreak spead for our five movies and then ordered them outbreak speed to fastest.  The user will be prompted to choose a movie(representing the speed of the outbreak) and city which will then produce an animation of how the outbreak would be projected to spread with those given parameters.  


## Purpose of the Analysis

The purpose is to determine the rate of which a virus(zombie outbreak) spreads within the US.  We focused our research on only human-to-human contact viruses and used variables such as outbreak speed, incubation time, population and population density determine the expected spread of the outbreak based on our predictive analysis. 

## Methodology

We found information for US populations based on zipcodes from https://data.world for the year 2016.  We were able to find use the uszipcode library in pandas to find city, state, latitude, longitude, and radius (miles).  We will compile this information to use for our data analysis.


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

import requests
import pandas as pd
from pprint import pprint
import time
import json
import csv
import math
import numpy

```


## Authors

Silvana Murphy- Initial Work - [SMU Team Crime- Project 2](https://github.com/SSMDFW)

Lori Brady - Initial Work - [SMU Team Crime- Project 2](https://github.com/loribeth18)

Mabel Gutierrez- Initial Work - [SMU Team Crime- Project 2](https://github.com/mabel912)

Velindia Lucas - Initial Work - [SMU Team Crime- Project 2](https://github.com/chele0630)

