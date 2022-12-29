import { Button, Container, Grid, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Autodiagnostico = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [test, setTest] = useState(0)
    const forms = [ 'Uso y manejo responsable del recurso agua', 'tratamiento a las aguas residuales de los procesos agrícolas u otros (domésticas)', 'identificar los fenómenos naturales (lluvias intensas, sequías, otros) su frecuencia e intensidad y sus posibles riesgos', 'identificar los fenómenos naturales (lluvias intensas, sequías, otros) su frecuencia e intensidad y sus posibles riesgos', 'implementa métodos de observación y prevención de las plagas y enfermedades que puede presentar el producto.' ]
  return (
    <>
            <Grid container sx={{height:'100vh'}} >
                <Grid item xs={4} sx={{bgcolor:'#65CA92', border:'1px solid black', height:'100%'}} >
                    <Typography> algo de texto</Typography>

                </Grid>
                <Typography>{test}</Typography>
                <Button onClick={()=>setTest(test+1)} >+1</Button>
                <Grid item xs={8}>
                    <Stack spacing={3} >
                        {
                            forms.map( el=> (
                                <Button variant="outlined" >{el.toUpperCase()}</Button>
                            ))

                        }
                    </Stack>
                    
                </Grid>

            </Grid>
    
    </>
  )
}
