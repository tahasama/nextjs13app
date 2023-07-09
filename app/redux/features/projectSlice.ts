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
import { v4 as uuid } from "uuid";
import { RootState } from "../store";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/app/firebase";

export const fetchProjectByUser = createAsyncThunk(
  "fetchProjectByUser",
  async (uid: any) => {
    try {
      const getProjects = collection(db, "projects");
      const getUserProjects = query(getProjects, where("user.uid", "==", uid));
      const querySnapshot = await getDocs(getUserProjects);
      const promises = querySnapshot.docs.map(async (docs: any) => {
        return { ...docs.data(), _id: docs.id };
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
  async (_id: string) => {
    try {
      const res = await getDoc(doc(db, "projects", _id));

      return { ...res.data(), _id: res.id };
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
        updatedAt: value?.updatedAt,
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
      title: val.title + "  " + uuid(),
    };
    try {
      const res = await addDoc(collection(db, "projects"), {
        ...{ ...object },
      });

      return { _id: res.id, ...res };
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

export const updateProject = createAsyncThunk(
  "saveProject",
  async (value: any) => {
    const object = {
      updatedAt: new Date(),
      _id: value._id,
      title: value.title, // Include the pythonCode field in the object
      description: value.description, // Include the pythonCode field in the object
      projectType: value.projectType,
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

  async (id: string) => {
    try {
      const res = await deleteDoc(doc(db, "projects", id));

      return res;
    } catch (e) {
      // Alert.alert("action failed pleas", e);
    }
  }
);

const vwdSearchTerms = [
  "javascript",
  "web",
  "dev",
  "development",
  "js",
  "vanilla",
  "webdev",
  "web dev",
];
const dsSearchTerms = [
  "data",
  "analysis",
  "science",
  "machine",
  "learning",
  "machine learning",
  "data analysis",
  "data science",
];

const pySearchTerms = ["python", "py"];
const rjSearchTerms = ["react", "rj"];

export const searchProjectsData = createAsyncThunk(
  "searchProjectsData",
  async (seria: any) => {
    const querySnapshot = await getDocs(collection(db, "projects"));

    const documents = querySnapshot.docs
      .filter((doc) => {
        const { user, description, title, projectType } = doc.data();
        const searchQuery = new RegExp(seria, "i");

        const isMatchedByProjectType =
          (projectType === "vwd" &&
            vwdSearchTerms.some((term) => searchQuery.test(term))) ||
          (projectType === "ds" &&
            dsSearchTerms.some((term) => searchQuery.test(term))) ||
          (projectType === "py" &&
            pySearchTerms.some((term) => searchQuery.test(term))) ||
          (projectType === "rj" &&
            rjSearchTerms.some((term) => searchQuery.test(term)));

        const isMatchedBySearchQuery =
          searchQuery.test(user.username) ||
          searchQuery.test(description) ||
          searchQuery.test(title);

        return isMatchedByProjectType || isMatchedBySearchQuery;
      })
      .map((doc) => ({ _id: doc.id, ...doc.data() }));

    return documents;
  }
);

export interface projectProps {
  projs: {
    all?: any[];
    user: {
      uid: string | undefined;
      email?: string | undefined;
      username?: string | undefined;
    };
    title: string;
    description: string;
    code?: { html: string; css: string; js: string };
    err: string;
    createdAt?: any;
    updatedAt?: any;
    saved: boolean;
    star: string[];
    reactCode: string;
    cells?: { cellId: string; cellCode: string }[];
    pythonCode: string;
    selectedDiv: string;
    projectType: string;
    _id: string;
    searchAll?: any[];
    loading: boolean;
    search?: string;
    projectTypeErr?: string;
    titleErr?: string;
    newTitle?: string;
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
  searchAll: [],
  loading: true,
  search: "",
  projectTypeErr: "",
  titleErr: "",
  newTitle: "",
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

    cleanForm: (state, action) => {
      state.titleErr = action.payload.titleErr;
      state.projectTypeErr = action.payload.projectTypeErr;
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
    searchTerms: (state, action) => {
      state.search = action.payload;
    },

    cleanUpProjects: (state, action) => {
      state.all = action.payload;
      state.searchAll = action.payload;
    },
    cleanUpSearch: (state, action) => {
      state.searchAll = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjectByUser.fulfilled, (state, action) => {
      Object.assign(state.all, action.payload);
    });
    builder.addCase(searchProjectsData.fulfilled, (state, action) => {
      Object.assign(state.searchAll, action.payload);
    });

    builder.addCase(fetchProjectById.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const getProjectData = (state: RootState) => state.proj;

export const {
  searchTerms,
  updateCode,
  updateProjectInfos,
  cleanState,
  updateDate,
  cleanUpSearch,
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
  // searchProjects,
  cleanForm,
} = projectSlice.actions;

export default projectSlice.reducer;
