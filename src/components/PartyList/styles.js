import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginBottom: "30px",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        padding: "15px 25px 0px 12px",
    },
    marginBottom: {
        marginBottom: "30px",
    },
    list: {
        height: "75vh",
        overflow: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.default}`,
        "&::-webkit-scrollbar": {
            width: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "6px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.background.default,
            borderRadius: "6px",
        },
    },
}));
