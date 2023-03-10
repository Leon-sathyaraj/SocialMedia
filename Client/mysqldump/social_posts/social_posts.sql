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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'test1','https://images.pexels.com/photos/13646290/pexels-photo-13646290.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',1,NULL),(2,'test2',NULL,2,NULL),(3,'test3',NULL,3,NULL),(4,'dsadasd','',3,'2023-03-06 21:48:08'),(5,'dsadas','',3,'2023-03-06 21:49:34'),(6,'hello','https://images.pexels.com/photos/13646290/pexels-photo-13646290.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',9,NULL),(10,'hi man','',9,'2023-03-07 12:58:03'),(11,'cookie!',NULL,9,'2023-03-07 12:59:05'),(12,'dsadasd','',9,'2023-03-07 13:19:41'),(13,'cookies man',NULL,9,'2023-03-07 13:25:16'),(14,'testing cookies!',NULL,9,'2023-03-07 13:32:45'),(15,'testing img',NULL,9,'2023-03-07 13:37:57'),(16,'testing code','',9,'2023-03-07 13:39:10'),(35,'Spending Time with my favourite pet!','1678352929788elmo with dog.jpeg',11,'2023-03-09 17:08:49'),(36,'Saw Oscar when I was on my way to job interview','1678353149839elmo with trash.jpeg',11,'2023-03-09 17:12:29'),(37,'Today is day 1 of starting my new job. Wish me luck everyone!','1678353225488a_eRlunA_400x400.jpg',11,'2023-03-09 17:13:45'),(38,'*nom nom nom* ME LOVE COOKIE','1678353334258cookie monster.jpeg',12,'2023-03-09 17:15:34'),(39,'Me love Cookie and eating!','1678353353565cooking with cookie monster.jpeg',12,'2023-03-09 17:15:53'),(40,'Due to the increase cost of cookies, Me found a job to buy more cookies','1678353386849cookie find job.jpeg',12,'2023-03-09 17:16:26'),(41,'Showing Eernie my collections','1678353557564bert collecon.jpeg',13,'2023-03-09 17:19:17'),(42,'Reading a story before going to bed','1678353593486reading with bernie.jpeg',13,'2023-03-09 17:19:53'),(46,'Hangout with the Sesame Street Famil~ I love you guys!','1678354045216download (3).jpeg',10,'2023-03-09 17:27:25'),(47,'Elmo and I saw something shocking.','1678354074109download (2).jpeg',10,'2023-03-09 17:27:54'),(48,'Its time for bed. Good night everyone!','1678357786173sleeping ernie.jpeg',13,'2023-03-09 18:29:46');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 20:23:59
