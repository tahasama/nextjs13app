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
import { v4 as uuid } from "uuid";

import { RootState } from "../store";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/app/firebase";

const POJECT_URL: any = process.env.NEXT_PUBLIC_PROJECT_URL;

export const fetchProjectByUser = createAsyncThunk(
  "fetchProjectByUser",
  async (uid: any) => {
    console.log("🚀 ~ file: projectSlice.ts:32 ~ uid:", uid);
    try {
      const getProjects = collection(db, "projects");
      const getUserProjects = query(getProjects, where("user.uid", "==", uid));

      const querySnapshot = await getDocs(getUserProjects);

      const promises = querySnapshot.docs.map(async (docs: any) => {
        return { ...docs.data(), _id: docs.id };
      });
      const result: any[] = await Promise.all(promises);
      console.log("🚀 ~ file: projectSlice.ts:45 ~ result:", result);
      return result;
    } catch (error) {
      return error;
    }
  }
);

export const fetchProjectById = createAsyncThunk<any, string>(
  "fetchProject",
  async (_id: string) => {
    try {
      const res = await getDoc(doc(db, "projects", _id));
      console.log("🚀 ~ file: projectSlice.ts:54 ~ res:", res);

      return { ...res.data(), _id: res.id };
    } catch (error) {
      return error;
    }
  }
);

export const searchProject = createAsyncThunk(
  "searchProject",
  async (projectTitle: string | undefined) => {
    try {
      const res = await axios.get(POJECT_URL + "search/q=" + projectTitle);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export interface valueProps {
  createdAt?: any;
  updatedAt?: any;
  _id?: string;
  title: string | undefined;
  description: string | undefined;

  user: {
    uid: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
  };
  star: string[];
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
        createdAt: value.createdAt,
        updatedAt: value.updatedAt,
      });
      return { _id: res.id, ...res };
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
    try {
      const res = await addDoc(collection(db, "projects"), { object });
      console.log(
        "🚀 ~ file: projectSlice.ts:157 ~ res:000000000000000000000000",
        res.id
      );
      return res;
    } catch (error) {
      console.log("errrrrrr3", error);
    }
  }
);

interface saveProps {
  _id: string | undefined;
  title: string;
  description: string;
  code?: {
    html: string | undefined;
    css: string | undefined;
    js: string | undefined;
  };
  cells?: { cellId: string; cellCode: string }[];
}

export const saveProject = createAsyncThunk(
  "saveProject",
  async (value: any) => {
    const object = {
      updatedAt: new Date(),
      _id: value._id,
      pythonCode: value.pythonCode, // Include the pythonCode field in the object
      cells: value.cells, // Include the pythonCode field in the object
      code:
        value.projectType !== "vwd"
          ? { html: "", css: "", js: "" }
          : { html: value.code.html, css: value.code.css, js: value.code.js }, // Include the pythonCode field in the object
    };
    console.log(
      "🚀 ~ file: projectSlice.ts:177 ~ objectWWWWWWWWWWWWWWWWWWWWWW:",
      value
    );

    try {
      const res = await updateDoc(
        doc(db, "projects", object._id),
        object // Pass the object containing the pythonCode field as the second argument
      );
      return res;
    } catch (error) {
      console.log("eeeeeeeeeeeeeeeeeeerr", error);
    }
  }
);

interface starProps {
  _id: string | undefined;
  star: string[];
}
export const StarProject = createAsyncThunk(
  "saveProject",
  async (value: any) => {
    const object = {
      _id: value._id,
      star: value.star,
    };

    try {
      const res = await updateDoc(
        doc(db, "projects", object._id),
        object // Pass the object containing the pythonCode field as the second argument
      );
      return res;
    } catch (error) {
      console.log("eeeeeeeeeeeeeeeeeeerr", error);
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
  _id: string;
  projs: {
    all: any[];
    user: {
      uid: string | undefined;
      email?: string | undefined;
      username?: string | undefined;
    };
    title: string;
    description: string;
    code?: { html: string; css: string; js: string };
    err: string;
    createdAt: any;
    updatedAt: any;
    saved: boolean;
    star: string[];
    reactCode: string;
    cells?: { cellId: string; cellCode: string }[];
    pythonCode: string;
    selectedDiv: string;
    projectType: string;
    _id: string;
    searchAll: any[];
    loading: boolean;
  };
}

export const projectInitialState = {
  _id: "",
  all: [],
  user: {
    uid: "",
    email: "",
    username: "",
  },
  title: "",
  description: "",
  code: { html: "", css: "", js: "" },
  err: "",
  createdAt: "",
  updatedAt: {},
  saved: true,
  star: [""],
  cells: [{ cellId: "", cellCode: "" }],
  reactCode: "",
  projectType: "",
  pythonCode: "",
  selectedDiv: "html",
  searchAll: [{}],
  loading: true,
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
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    filteredProjects: (state, action) => {
      state.all = action.payload;
    },
    cleanUpProjects: (state, action) => {
      // console.log("cleaning zooooooooone", action.payload);
      state.all = action.payload;
      state.searchAll = action.payload;
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
  updateLoading,
  filteredProjects,
  cleanUpProjects,
} = projectSlice.actions;

export default projectSlice.reducer;
