import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Sudoku from "./containers/Sudoku/Sudoku";

const App = () => {
    return (
        <Layout>
            <Sudoku />
        </Layout>
    );
}

export default App;
