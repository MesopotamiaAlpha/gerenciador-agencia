import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(destino, carregar) {
    return { destino, carregar };
}

const rows = [
    createData('Foz do Iguaçu', 'Cascavel, Guarapuava'),
    createData('Dois Vizinhos', 'Guarapuava, Candói'),
    createData('Paranaguá', 'Curitiba'),
    createData('Cruz Machado', 'União da Vitória'),
    createData('Registro', 'Curitiba'),
    createData('Cafelândia', 'Guarapuava'),
    createData('Palotina', 'Cascavel, Toledo'),
    createData('General Carneiro', 'União da vitãria, Ponta Grussa'),
    createData('Irati', 'União da Vitória, Ponta Grossa'),
    createData('Pinhão', 'Guarapuava'),
    createData('Laranjeiras do Sul', 'Guarapuava, Canta Galo'),
    createData('Chapeco', 'Cascavel'),
    createData('Chopinzinho', 'Curitiba, Candói'),
    createData('Telêmaco Borba', 'Ponta Grossa'),
    createData('Canta Galo', 'Três Pinheiros'),
    createData('Birituna', 'General Carneiro'),
    createData('Céu Azul', 'Cascavel'),
    createData('Corbélia', 'Guarapuava'),
    createData('Dois Vizinhos', 'Candói'),
];


function Transbordo() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Destino</TableCell>
                            <TableCell align="right">Onde Carregar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.destino}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.destino}
                                </TableCell>
                                <TableCell align="right">{row.carregar}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </div>
    );
}

export default Transbordo;