import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from '../Actions/areas'
import  AreaModule  from "./ModuleAreas";
import { Grid,Card,Table,TableCell, TableBody,TableHeader,TableRow } from "semantic-ui-react";
const Areas = (props) => {
    //const [x,setX]= useState(0)
    useEffect(()=>{
        props.fetcAllAreas()
    },[])
    return ( 
    <Card>
        <Grid container>
            <Grid >
                <AreaModule/>
            </Grid>
            <Grid >
                <div>Areas</div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            props.AreaList.map((record,index)=>
                            {
                                return(<TableRow>
                                    <TableCell>{record.id}</TableCell>
                                    <TableCell>{record.nombre}</TableCell>
                                </TableRow>)
                            })
                        }
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    </Card>    
     );
}

const mapStateToProps = state =>({
        AreaList: state.Area.list
})

const mapActionToProps = {
    fetcAllAreas: actions.fetchAllv
}

export default connect(mapStateToProps,mapActionToProps)(Areas)