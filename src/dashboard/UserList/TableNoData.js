import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';


export default function Index({ query }) {
    return (
        <TableRow>
            <TableCell align="center" colSpan={6} sx={{ py: 5, px: 5, width: '100%' }}>
                <Typography variant="h6" paragraph>
                    Not found
                </Typography>

                <Typography variant="body2">
                    No results found for &nbsp;
                    <strong>&quot;{query}&quot;</strong>.
                    <br /> Try checking for typos or using complete words.
                </Typography>
            </TableCell>
        </TableRow>
    );
}

