package com.example.triviayallah;

import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Dbquestion{


  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  
  
  private Long id;

  private String type;
  private String difficulty;

  private String  category;

  private String question;

  private String correct_answer;



  public Dbquestion(String type,String difficulty,String category,String  question,String correct_answer){

    this.type=type;
    this.category=category;
    this.question=question;
    this.correct_answer=correct_answer;
  }
  
}
