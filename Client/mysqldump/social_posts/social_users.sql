-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: social
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(50) NOT NULL,
  `coverPic` varchar(500) DEFAULT NULL,
  `profilePic` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test','test','test',NULL,NULL),(2,'test','test','test','test',NULL,NULL),(3,'test2','test@gmail.com','$2a$10$TpOYQWTgTfrIh4Gh2FAKt.emO0J24EZ/xnFw745/kUXOGhnJXC9d.','test','https://images.pexels.com/photos/14831657/pexels-photo-14831657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/14831657/pexels-photo-14831657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),(4,'test23','23','$2a$10$smAb9U4rnM36Q22AfbZdPOQovqIy9oQqmBAtBlwhoj.ak.z0EBJ12','323',NULL,NULL),(5,'test231','test231','$2a$10$74b7SNUUXquyoosi6G6mUO1NNMDrAglkkxeZdx.fVF6WfNmkeoFCO','test231',NULL,NULL),(6,'test2311','test2311','$2a$10$ih96mLIbrf1PsU3pa8BWKO5hqZ.zqSUDzG5rpK7ThSvkegcd1l7Ki','test2311',NULL,NULL),(7,'test211','test211','$2a$10$lPafkIReBB9I7x2Gd2xwCOSSnzyv6xSv5/0zgImOXtSCL.jz2egXW','test211',NULL,NULL),(8,'test233','test233','$2a$10$5vHhRBdKyyHgkAIKz6vQY..mQoqBrdSX6miQMOgktABREpXZmdyVG','test233',NULL,NULL),(9,'123123','123123','$2a$10$ZMTHyddi/AQSm7FsduSP1.6YzcmFSB2qZjyOotLSMkZN3VISpDH0m','123123','https://images.pexels.com/photos/13646290/pexels-photo-13646290.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load','https://images.pexels.com/photos/13646290/pexels-photo-13646290.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'),(10,'Big Bird','123','$2a$10$E20EHk4Jr5dbOFqPWXfDyugnVCTrXJz0ps9CsUfrELfDhHQpW39QS','Big Bird','1678354006082download (3).jpeg','1678354006094download (4).jpeg'),(11,'Elmo','123','$2a$10$XvCY6vNxruLdvUlQXUGVPuxXSA4Gl5hAGdi69vO0zCY1KPLcnuRZu','Elmo','1678353244603elmo with dog.jpeg','1678353244588a_eRlunA_400x400.jpg'),(12,'Cookie Monster','123','$2a$10$ZcZRdXXTHeuRqEM6ecl4eO80rB7ztteW.WhYmzs1DaMu/HeqswohW','Cookie Monster','1678353421865cookie find job.jpeg','1678353421849cookie monster.jpeg'),(13,'Bert','123','$2a$10$tnXrRurEy66FWc62ZxOTxORBsX5yaAowTqaQe4dClXN7MuqD9Zfly','Bert','1678353667500download.jpeg','1678353667514download (1).jpeg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 20:24:02
