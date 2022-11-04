library(tidyverse)
library(stringr)
library("dplyr")
library(readr)

zipCodes = read_csv("/Users/jashparekh/Downloads/uszips.csv") |>
  mutate(county_fips = as.double(county_fips)) |>
  mutate(zipCode = as.double(zip)) |>
  select(zipCode, city, state_name, county_name, county_fips)
zipCodes


df = read_csv("/Users/jashparekh/downloads/zipcds_fa08.csv") 
df
df_data = df |>
  left_join(zipCodes, by = "zipCode") |> 
  group_by(county_fips, county_name, state_name) |>
  summarise( population = sum(population) ) |>
  ungroup() |>
  arrange(state_name) |>
  mutate(id = str_pad(county_fips, 5, pad = "0")) |> 
  select(id, county_name, state_name, population) |>
  write.csv("/Users/jashparekh/Desktop/f08_clean.csv")


