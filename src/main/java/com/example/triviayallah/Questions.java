package com.example.triviayallah;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin("*")
public class Questions{


  RestTemplate q=new RestTemplate();

  @Autowired
  QueRepo  db;


  @GetMapping("/easy")
  public String Qeasy() throws Exception{

      String resp=q.getForObject("https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple",String.class);
      System.out.println(resp);


      ObjectMapper mapper=  new ObjectMapper();


      Wrapper data= mapper.readValue(resp,Wrapper.class);
      
     Jsan info=data.results.get(0); 


     Dbquestion map= new Dbquestion(info.type,info.difficulty,info.category,info.question,info.correct_answer);

     db.save(map); 

      return resp;

  }
@GetMapping("/medium")
public String Qmed() throws Exception{

    String resp=q.getForObject("https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple",String.class);
    System.out.println(resp);


      ObjectMapper mapper=  new ObjectMapper();
      
      Dbquestion map=mapper.readValue(resp,Dbquestion.class);

     db.save(map); 

    return resp;

}


@GetMapping("/hard")
public String Qhard() throws Exception{

    String resp=q.getForObject("https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple",String.class);
    System.out.println(resp);



     ObjectMapper mapper=  new ObjectMapper();

     Dbquestion map=mapper.readValue(resp,Dbquestion.class);

     db.save(map); 

    return resp;

}


}
