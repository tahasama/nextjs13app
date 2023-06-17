import {
  cssExample,
  example1,
  example2,
  htmlExample,
  javaScriptExample,
  pythonExample,
  pythonExample2,
} from "@/app/projects/constatnts/example";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uuid } from "uuidv4";

import { RootState } from "../store";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

const POJECT_URL: any = process.env.NEXT_PUBLIC_PROJECT_URL;

export const fetchProjectByUser = createAsyncThunk(
  "fetchAllProject",
  async (uid: any) => {
    try {
      const getProjects = collection(db, "projects");
      const querySnapshot = await getDocs(getProjects);
      const promises = querySnapshot.docs.map(async (docs: any) => {
        return { ...docs.data(), projectId: docs.id };
      });
      const result: any[] = await Promise.all(promises);
      return result;
    } catch (error) {
      return error;
    }
  }
);

export const fetchProjectById = createAsyncThunk<any, string>(
  "fetchProject",
  async (projectId: string) => {
    try {
      const res = await getDoc(doc(db, "projects", projectId));

      return { ...res.data(), projectId: res.id };
    } catch (error) {
      return error;
    }
  }
);

export interface valueProps {
  projectId?: string;
  title: string | undefined;
  description: string | undefined;

  user: {
    uid: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
  };
  star?: string[];
  projectType: string;
  cells?: { cellId: string; cellCode: string }[];
  code?: {
    html: string | undefined;
    css: string | undefined;
    js: string | undefined;
  };
  pythonCode?: string | undefined;
}

export const createProject = createAsyncThunk(
  "createProject",
  async (value: valueProps) => {
    console.log("🚀 ~ file: projectSlice.ts:118 ~ value:");
    if (value.projectType === "rj") {
      value = {
        ...value,
        cells: [
          { cellId: uuid(), cellCode: example1 },
          { cellId: uuid(), cellCode: example2 },
        ],
      };
    } else if (value.projectType === "vwd") {
      value = {
        ...value,
        code: { html: htmlExample, css: cssExample, js: javaScriptExample },
      };
    } else if (value.projectType === "ds") {
      value = {
        ...value,
        pythonCode: pythonExample,
      };
    } else {
      value = {
        ...value,
        pythonCode: pythonExample2,
      };
    }
    try {
      const res = await addDoc(collection(db, "projects"), {
        description: value.description,
        title: value.title,
        user: value.user,
        projectType: value.projectType,
        star: value.star,
        cells: value.cells ? value.cells : [],
        code: value.code ? value.code : "",
        pythonCode: value.pythonCode ? value.pythonCode : "",
      });
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const cloneProject = createAsyncThunk(
  "cloneProject",
  async (val: valueProps) => {
    const object: any = {
      ...val,
      // email: val.user,
      title: val.title + "  " + uuid(),
    };
    const res = await axios.post(POJECT_URL, object);
    return res.data;
  }
);

// export const saveProject = createAsyncThunk(
//   "saveProject",
//   async (value: valueProps) => {
//     const object = {
//       _id: value._id,
//     };
//     const res = await axios.put(POJECT_URL + object._id, value);
//     return res.data;
//   }
// );
interface starProps {
  _id: string | undefined;
  star: string[];
}
export const StarProject = createAsyncThunk(
  "saveProject",
  async (value: starProps) => {
    const object = {
      _id: value._id,
      star: value.star,
    };
    try {
      const res = await axios.put(POJECT_URL + "star/" + object._id, value);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteProject = createAsyncThunk(
  "deleteProject",
  async (id: string | undefined) => {
    await axios.delete(POJECT_URL + id);
  }
);
export interface projectProps {
  projs: {
    all: any[];
    user: string;
    title: string;
    description: string;
    code?: { html: string; css: string; js: string };
    err: string;
    createdAt: string;
    updatedAt: string;
    saved: boolean;
    star: string[];
    reactCode: string;
    cells?: { cellId: string; cellCode: string }[];
    pythonCode: string;
    selectedDiv: string;
    projectType: string;
    projectId: string;
  };
}

export const projectInitialState = {
  all: [],
  user: "",
  title: "",
  description: "",
  code: { html: "", css: "", js: "" },
  err: "",
  createdAt: "",
  updatedAt: "",
  saved: true,
  star: [],
  cells: [{ cellId: "", cellCode: "" }],
  reactCode: "",
  projectType: "",
  pythonCode: "",
  selectedDiv: "html",
  projectId: "",
};

export const projectSlice = createSlice({
  name: "project-redux",
  initialState: projectInitialState,
  reducers: {
    updateCode: (state, action) => {
      Object.assign(state.code, action.payload.code);
    },
    updatePythonCode: (state, action) => {
      state.pythonCode = action.payload;
    },
    AddCells: (state, action) => {
      state.cells.unshift(action.payload);
    },

    DeleteCells: (state, action) => {
      state.cells = state.cells.filter(
        (cell) => cell.cellId !== action.payload.cellId
      );
    },

    updateCellCode: (state, action) => {
      const cell = state.cells.find(
        (cell) => cell.cellId === action.payload.cellId
      );
      if (cell) {
        cell.cellCode = action.payload.cellCode;
      }
    },
    updateProjectInfos: (state, action) => {
      Object.assign(state, action.payload);
    },
    updateDate: (state, action) => {
      state.updatedAt = action.payload;
    },
    // updateId: (state, action) => {
    //   state.uid = action.payload._id;
    // },
    updateSaved: (state, action) => {
      state.saved = action.payload;
    },
    updateStar: (state, action) => {
      state.star = action.payload.star;
      // state.star.push(action.payload);
    },
    selectedDivState: (state, action) => {
      state.selectedDiv = action.payload;
    },

    cleanState: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjectByUser.fulfilled, (state, action) => {
      Object.assign(state.all, action.payload);
    });

    builder.addCase(fetchProjectById.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });
    // builder.addCase(saveProject.fulfilled, (state, action) => {
    //   state.updatedAt = action.payload.updatedAt;
    //   state.cells = action.payload.cells;
    //   state.code = action.payload.code;
    // });
  },
});

// Action creators are generated for each case reducer function
export const getProjectData = (state: RootState) => state.proj;

export const {
  updateCode,
  updateProjectInfos,
  cleanState,
  updateDate,
  // updateId,
  updateSaved,
  updateStar,
  updateCellCode,
  AddCells,
  DeleteCells,
  updatePythonCode,
  selectedDivState,
} = projectSlice.actions;

export default projectSlice.reducer;