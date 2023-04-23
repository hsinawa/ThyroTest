import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTestsReducer } from "../reducers/TestsReducer";
import { GetAllTestsAction } from "../actions/TestsAction";
import CircularStatic from "../components/loading";
import React from "react";
import "./grid.css";

//Material UI
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import GridTests from "./GridTests";
import { ThreeBoxSkeleton } from "../components/BundleLoading";

export const GetTestsByDiagnostics = () => {
  const getalltests = useSelector((state) => state.GetAllTestsReducer);
  const { tests, loading, error } = getalltests;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllTestsAction());
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      {loading && <ThreeBoxSkeleton />}

      {tests && (
        <div className="grid-3">
          {tests.slice(0, 3).map((i) => {
            return (
              <p>
                <a href={`test/${i._id}`} style={{ textDecoration: "none" }}>
                  <p>
                    <GridTests i={i} />
                  </p>
                </a>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GetTestsByDiagnostics;
