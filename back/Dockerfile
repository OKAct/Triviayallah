
FROM gradle:9.5-jdk25 AS build

COPY . .

RUN gradle build 


FROM eclipse-temurin:25

WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar


ENTRYPOINT ["java","-jar","/app.jar"]

