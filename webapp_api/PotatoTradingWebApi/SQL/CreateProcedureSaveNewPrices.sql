-- =======================================================
-- Create Stored Procedure
-- =======================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <Liam O'Shea>
-- Create Date: <2019/03/18>
-- Description: <Update Proc>
-- =============================================
ALTER PROCEDURE dbo.SaveNewPrices
	@variety varchar(50),
	@fee float,
	@broker varchar(50)
AS
BEGIN

--declare @variety varchar(50) = 'Accord'
--declare @fee float = 1000
--declare @broker varchar(50) = 'StorageKings'

--set @variety = 'Accord'
--set @fee = 1000
--set @broker = 'StorageKings'
declare @storageid int
set @storageid = (
	select id from dbo.StorageCompany where name=@broker
)
declare @productid int
set @productid = (
	select ProductId from dbo.Product where VarietyName=@variety
)
--SELECT @storageid
--SELECT @productid


if EXISTS (SELECT *
  FROM [dbo].[StoragePrice] sp
  inner join dbo.Product p on sp.ProductId=p.ProductId
  inner join dbo.StorageCompany sc on sp.StorageId = sc.Id
  Where p.VarietyName = @variety AND sc.name = @broker
  )
Begin
UPDATE dbo.StoragePrice
SET StorageFee = @fee
WHERE ProductId = @productid and StorageId = @storageid
END

-- Improved functionality would be to allow creation of companies on the fly --

--ELSE
--BEGIN
-- INSERT dbo.StoragePrice
-- (
-- )
-- VALUES
-- (
-- )
END
Set statistics io off
GO