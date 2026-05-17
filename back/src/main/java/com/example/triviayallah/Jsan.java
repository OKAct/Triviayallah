package com.example.triviayallah;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)
public class Jsan{

  public String type;
  public String difficulty;
  public String category;
  public String question;
  public String correct_answer;
  
}
