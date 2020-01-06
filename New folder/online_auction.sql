-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: online_auction
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `auction_list`
--

DROP TABLE IF EXISTS `auction_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auction_list` (
  `USER_ID` int(11) NOT NULL,
  `PRODUCT_ID` int(11) NOT NULL,
  PRIMARY KEY (`USER_ID`,`PRODUCT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction_list`
--

LOCK TABLES `auction_list` WRITE;
/*!40000 ALTER TABLE `auction_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `CAT_ID` int(11) NOT NULL,
  `CAT_NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`CAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Mobile'),(2,'Laptop'),(3,'Headphone'),(4,'Watch');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history_product`
--

DROP TABLE IF EXISTS `history_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history_product` (
  `USER_ID` int(11) NOT NULL,
  `PRODUCT_ID` int(11) NOT NULL,
  PRIMARY KEY (`USER_ID`,`PRODUCT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history_product`
--

LOCK TABLES `history_product` WRITE;
/*!40000 ALTER TABLE `history_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `history_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `DESCRIPTION` varchar(200) NOT NULL,
  `PRICE` int(11) NOT NULL,
  `CAT_ID` int(11) NOT NULL,
  `STATUS` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Điện thoại Samsung Galaxy A51','1',7990000,1,0),(2,'Điện thoại iPhone 11 Pro Max 64GB','2',33990000,1,0),(3,'Điện thoại OPPO A9','3',649000,1,0),(4,'Điện thoại Xiaomi Redmi Note 8 (4GB/64GB)','1',4590000,1,0),(5,'Điện thoại Vivo U10','1',3990000,1,0),(6,'Điện thoại Nokia 6.1 Plus','1',3590000,1,0),(7,'Laptop Apple MacBook Pro 2018 Touch i5 2.3GHz/8GB/256GB (MR9Q2SA/A)','1',39900000,2,0),(8,'Laptop Lenovo IdeaPad 330 15 i7 8550U/4GB/1TB+16GB/4GB R530/Win10 (81DE01JPVN)','1',18990000,2,0),(9,'Laptop Dell Vostro 3580 i5 8265U/4GB/1TB/Win10 (T3RMD1)','1',15290000,2,0),(10,'Laptop Acer Aspire A515 54 54EU i5 10210U/8GB/512GB/Win10 (NX.HN3SV.002)','1',15990000,2,0),(11,'Laptop Apple Macbook Pro Touch 2019 i7 2.6GHz/16GB/256GB/4GB Radeon 555X (MV922SA/A)','1',55990000,2,0),(12,'Laptop Apple Macbook Air 2019 i5 1.6GHz/8GB/128GB (MVFM2SA/A)','1',28990000,2,0),(13,'Tai nghe Bluetooth sạc không dây AirPods 2 Apple MRXJ2 Trắng','1',5990000,3,0),(14,'Tai nghe Bluetooth LG HBS-1120 Đen','1',3490000,3,0),(15,'Tai nghe Bluetooth True Wireless Huawei FreeBuds 3','1',3990000,3,0),(16,'Tai nghe Bluetooth True Wireless JBL T120 Đen','1',2390000,3,0),(17,'Tai nghe chụp tai Gaming Logitech G Pro Đen','1',2490000,3,0),(18,'Tai nghe Bluetooth True Wireless Mozard DS635-WB Đen','1',950000,3,0),(19,'Apple Watch S5 LTE 44mm viền nhôm dây cao su','1',14990000,4,0),(20,'Apple Watch S4 GPS 44mm viền nhôm dây vải','1',11990000,4,0),(21,'Đồng hồ Nam Orient RA-AG0027Y10B - Cơ tự động','1',6752000,4,0),(22,'Đồng hồ Nữ Michael Kors MK2747','1',3249000,4,0),(23,'Đồng hồ Nam MVMT D-MR01-WC','1',2040000,4,0),(24,'Apple Watch S5 LTE 44mm viền thép dây thép','1',21990000,4,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `USER_ID` int(11) NOT NULL,
  `PRODUCT_ID` int(11) NOT NULL,
  `CONTENT` varchar(300) NOT NULL,
  PRIMARY KEY (`USER_ID`,`PRODUCT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `USERNAME` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) NOT NULL,
  `FULLNAME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  `DOB` datetime NOT NULL,
  `PERMISSION` int(11) NOT NULL,
  `POINT_PLUS` int(11) NOT NULL,
  `POINT_SUBSTRACT` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `USERNAME_UNIQUE` (`USERNAME`),
  UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `watch_list`
--

DROP TABLE IF EXISTS `watch_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `watch_list` (
  `USER_ID` int(11) NOT NULL,
  `PRODUCT_ID` int(11) NOT NULL,
  PRIMARY KEY (`USER_ID`,`PRODUCT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `watch_list`
--

LOCK TABLES `watch_list` WRITE;
/*!40000 ALTER TABLE `watch_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `watch_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `won_list`
--

DROP TABLE IF EXISTS `won_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `won_list` (
  `USER_ID` int(11) NOT NULL,
  `PRODUCT_ID` int(11) NOT NULL,
  PRIMARY KEY (`USER_ID`,`PRODUCT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `won_list`
--

LOCK TABLES `won_list` WRITE;
/*!40000 ALTER TABLE `won_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `won_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

SELECT * FROM PRODUCT

-- Dump completed on 2020-01-03  0:13:06
