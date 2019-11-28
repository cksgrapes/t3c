import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

// const withLayout = Page => {
//     return () => (
//         <div style={layoutStyle}>
//             <Header />
//             <Page />
//         </div>
//     );
// };

// const Layout = props => (
//     <div style={layoutStyle}>
//         <Header />
//         {props.content}
//     </div>
// );

export default Layout;