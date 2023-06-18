import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useGetUserPerformanceQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import { useSelector } from "react-redux";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    { field: "userId", headerName: "User ID", flex: 0.5 },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "product",
      headerName: "No of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m={!isMobile ? "1.5rem 2.5rem" : "20px 15px"}>
      <Header
        title="PERFORMANCE"
        subtitle="Track Your Affiliate Sales Performance Here"
      />
      <Box
        mt="40px"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={(data && data.sales) || []}
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          columns={columns}
          components={{ ColumnMenu: CustomColumnMenu }}
        />
      </Box>
    </Box>
  );
};

export default Performance;
