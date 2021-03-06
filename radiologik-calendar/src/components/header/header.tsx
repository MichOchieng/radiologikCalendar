import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Header = () => {
    return(
        <AppBar
        position="static"
        sx={{
            marginBottom: "10vh",
            background: "none",
            boxShadow: "none"
        }}
        >
            <Container
                maxWidth="xl"
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ 
                        flexGrow: 1,
                        padding: "0.5em", 
                        fontFamily: 'Roboto Serif, serif',
                        color: '#ef4040'
                    }}
                >
                    Radiologik Calendar
                </Typography>
            </Container>
        </AppBar>
    )
}