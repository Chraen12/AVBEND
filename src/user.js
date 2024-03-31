import React, { useEffect, useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, AvatarGroup, Button, Checkbox, Chip, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  FormControl, 
  InputBase, InputLabel, Menu, MenuItem, OutlinedInput, Paper, Select, Table, TableBody, TableCell, 
  TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Tooltip } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BlockIcon from '@mui/icons-material/Block';
import { green, pink, red } from "@mui/material/colors";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditSharpIcon from '@mui/icons-material/EditSharp';

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  }),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: 'none',
}));
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginBottom: theme.spacing(2), // Add margin at the bottom of the table container
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(id,username, email, tel, namebank,rank,statused) {
  return {
    id,
    username, 
    email, 
    tel, 
    namebank,
    rank,
    statused,
  };
}
const rows = [
  createData(1, 'EarthEaeth', 'tharakhon.r@ku.th', '0546468754', 'สวัสดีชาวบ้าน', 'bronze','active'),
  createData(2, 'IUWETHEY', '6330300437tharakhon@gmail.com', '0929612753', 'AVB 2', 'gold','banned'),
  createData(3, 'ลิลลี่โรส', 'lily127@gmail.com', '0947812704', 'บ้านเกษตร', 'platinum','active'),
  createData(4, 'ทยงย่า','TyTracker@hotmail.com','0950701127','ทยงย่ารักสวน','silver','active'),

];
const headCells = [
  {
    id: 'username',
    numeric: false,
    disablePadding: true,
    label: 'ชื่อผู้ใช้',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'อีเมล',
  },
  {
    id: 'tel',
    numeric: false,
    disablePadding: false,
    label: 'เบอร์โทร',
  },
  {
    id: 'namebank',
    numeric: false,
    disablePadding: false,
    label: 'ชื่อธนาคาร',
  },
  {
    id: 'rank',
    numeric: false,
    disablePadding: false,
    label: 'ระดับ',
  },
  {
    id: 'statused',
    numeric: false,
    disablePadding: false,
    label: 'สถานะ',
  },
  
];

function createData2(ida,username2, email2, password,statusad) {
  return {
    ida,
    username2, 
    email2, 
    password, 
    statusad,
  };
}
const rowad =[
  createData2(1,'Addmin1','fufu@gmail.com','addmin505','active'),
  createData2(2,'Addmin2','goofy@gmail.com','addmin75','active'),
  createData2(3,'Addmin3','snoopy@gmail.com','addmin127','banned'),
];
const headCells2 = [
  {
    id: 'username2',
    numeric: false,
    disablePadding: true,
    label: 'ชื่อผู้ใช้',
  },
  {
    id: 'email2',
    numeric: false,
    disablePadding: false,
    label: 'อีเมล',
  },
  {
    id: 'password',
    numeric: true,
    disablePadding: false,
    label: 'รหัสผ่าน',
  },
  {
    id: 'statusad',
    numeric: false,
    disablePadding: false,
    label: 'สถานะ',
  },
 
];
const ranklist =['bronze','silver','gold','platinum'];

function descendingComparator(a, b, orderBy) {
  if (orderBy === 'rank') {
    return ranklist.indexOf(b[orderBy]) - ranklist.indexOf(a[orderBy]);
  } else if (orderBy === 'statused') {
    const statusOrder = { 'active': 1, 'banned': 2 };
    return statusOrder[b[orderBy]] - statusOrder[a[orderBy]]; // สลับ a และ b เพื่อให้เรียงจากน้อยไปมาก
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy); 
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{backgroundColor:'#e5db9c'}}>
      <TableRow>
        <StyledTableCell align="left" onClick={createSortHandler('username')}>
          ชื่อผู้ใช้</StyledTableCell>
        <StyledTableCell align="left" onClick={createSortHandler('email')}>
          อีเมล</StyledTableCell>
        <StyledTableCell align="left" onClick={createSortHandler('tel')}>
          เบอร์โทร</StyledTableCell>
        <StyledTableCell align="left" onClick={createSortHandler('namebank')}>
          ชื่อธนาคาร</StyledTableCell>
        <StyledTableCell align="left" onClick={createSortHandler('rank')}>
          ระดับ</StyledTableCell>
        <StyledTableCell align="left" onClick={createSortHandler('statused')}>
          สถานะ</StyledTableCell>
        <StyledTableCell align="left"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
}


EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#FEFAE0',
  '&:hover': {
    backgroundColor: '#FEFAE0',
  },
  margin: theme.spacing(2),
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    width: '100',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const handleBlockClick = () =>{
  console.log('Click');
};

function EnhancedTableToolbar(props) {
  const { numSelected, onRequestSort } = props;
  

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
          <IconButton>
            <BlockIcon sx={{color: red[800]}} />
          </IconButton>
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Typography>
      )}
      
      {numSelected > 0 ? (
        <Tooltip title="Banned">
          <IconButton onClick={handleBlockClick}>
            <BlockIcon sx={{color: red[800]}} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Addminuser(){
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('username');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [currentView, setCurrentView] = useState('main');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts,setFilteredProducts]=useState([]);
    const [originalData,setOriginalData]=useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [age, setAge] = React.useState('');
    const [rank,setrank] =useState('');
    const [statuse,setStuse]=useState('');
    const [openDialog,setOpenDialog]=React.useState(false);
    const opened = Boolean(anchorEl);

    console.log(filteredProducts)
    
    const handleSearchChange = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
    
      // ตรวจสอบว่า query เป็นค่าว่างหรือไม่
      if (query.trim() === "") {
        // หากเป็นค่าว่าง ให้ใช้ข้อมูลเดิมเพื่อรีเซ็ตค่า
        setFilteredProducts(originalData);
      } else {
        // หากไม่ใช่ค่าว่าง ให้กรองข้อมูลตาม query
        filterProducts(query);
      } 
    };
    
    useEffect(() => {
      // ตรวจสอบว่า query เป็นค่าว่างหรือไม่
      if (searchQuery.trim() === "") {
        // หากเป็นค่าว่าง ให้ใช้ข้อมูลเดิมเพื่อรีเซ็ตค่า
        setFilteredProducts(originalData);
      } else {
        // หากไม่ใช่ค่าว่าง ให้กรองข้อมูลตาม query
        filterProducts(searchQuery);
      }
    }, [searchQuery, originalData]);

    useEffect(()=>{
      const rows = [
        
        {
          'id': '1',
          'username': 'EarthEaeth', 
          'email': 'tharakhon.r@ku.th', 
          'tel': '0546468754', 
          'namebank': 'สวัสดีชาวบ้าน',
          'rank': 'bronze',
          'statused': 'active',
        },
        {
          'id': '2',
          'username': 'IUWETHEY', 
          'email': '6330300437tharakhon@gmail.com', 
          'tel': '0929612753', 
          'namebank': 'AVB 2',
          'rank': 'gold',
          'statused': 'banned',
        },
        {
          'id': '3',
          'username': 'ลิลลี่โรส', 
          'email': 'lily127@gmail.com', 
          'tel': '0947812704', 
          'namebank': 'บ้านเกษตร',
          'rank': 'platinum',
          'statused': 'active',
        },
        {
          'id': '4',
          'username': 'ทยงย่า', 
          'email': 'TyTracker@hotmail.com', 
          'tel': '0950701127', 
          'namebank': 'ทยงย่ารักสวน',
          'rank': 'silver',
          'statused': 'active',
        }
      ]; setFilteredProducts(rows);
      setOriginalData(rows);
    },[]);

    const filterProducts = (query) => {
      const filtered = originalData.filter((product) =>
        product.username.toLowerCase().includes(query.toLowerCase()) || 
        product.email.toLowerCase().includes(query.toLowerCase()) || 
        product.tel.toLowerCase().includes(query.toLowerCase()) || 
        product.namebank.toLowerCase().includes(query.toLowerCase()) || 
        product.rank.toLowerCase().includes(query.toLowerCase()) || 
        product.statused.toLowerCase().includes(query.toLowerCase())
      );
    
      setFilteredProducts(filtered);
    };

    const filterData = (query) => {
      const filtered = originalData.filter((rowData) => 
        rowData.username2 && rowData.username2.toLowerCase().includes(query.toLowerCase()) ||
        rowData.email2 && rowData.email2.toLowerCase().includes(query.toLowerCase()) ||
        rowData.password && rowData.password.toLowerCase().includes(query.toLowerCase()) ||
        rowData.statusad && rowData.statusad.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRows(filtered);
    };
    
    const handleSearchChange2 = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
    
      if (query.trim() === "") {
        setFilteredRows(originalData);
      } else {
        filterData(query);
      } 
    };
    
    useEffect(() => {
      if (searchQuery.trim() === "") {
        setFilteredRows(originalData);
      } else {
        filterData(searchQuery);
      }
    }, [searchQuery, originalData]);
    
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';

      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    
    const sortedRows = React.useMemo(() => {
      const comparator = (a, b) => {
        if (orderBy === 'rank') {
          return ranklist.indexOf(a.rank) - ranklist.indexOf(b.rank);
        } else if (orderBy === 'statused') {
          const statusOrder = { 'active': 1, 'banned': 2 };
          return statusOrder[a.statused] - statusOrder[b.statused];
        }
        return getComparator(order, orderBy)(a, b);
      };
    
      if (!Array.isArray(filteredRows)) {
        return []; 
      }
    
      const sortedData = stableSort(filteredRows, comparator);
      return order === 'desc' ? sortedData.reverse() : sortedData;
    }, [filteredRows, order, orderBy, page, rowsPerPage]);
    
  
    const handleClick = (event, id) => {
      if (event.target.closest("#basic-menu")) {
        return;
      }
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
  
      setSelected(newSelected);;
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event) => {
      setDense(event.currentTarget);
    };

    const handlechoose = (event) =>{
        setAnchorEl(event.currentTarget)
    };

    const handleChange = (event) => {
      setAge(Number(event.target.value) || '');
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason !== 'backdropClick') {
        setOpen(false);
      }
    };
  
    <EnhancedTableToolbar
      onRequestSort={handleRequestSort}
    />
  
    const isSelected = (id) => selected.indexOf(id) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
      const visibleRows = React.useMemo(
        () =>
          stableSort(filteredProducts, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
          ),
        [filteredProducts, order, orderBy, page, rowsPerPage],
      );
    
  
    {/*const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };*/}
      const switchToMainView = () => {
        setCurrentView('main');
      };
    
      const switchToAddView = () => {
        setCurrentView('addmin');
      };
      const onSelectAllClick = (event) => {
        if (event.target.checked) {
          // Select all rows
          const selectedIds = visibleRows.map((rows) => rows.id);
          setSelected(selectedIds);
        } else {
          // Deselect all rows
          setSelected([]);
        }
      };

    return(
        <div>
          
           <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:'limegreen' }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            ADMIN
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        
      >
        <Toolbar />
        
        <List>
          {['จัดการผู้ใช้AVB'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={switchToMainView} >
                <ListItemIcon>
                  {index % 2 === 0 ? <AccountCircleIcon /> : <ShoppingCartIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['จัดการแอดมิน'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={switchToAddView}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, margin:6 }}>
        {currentView === 'main' && (
        <>
        <h1>USERS AVB ACCOUNTS</h1>
        <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, backgroundColor:'#FEFAE0' }}> 
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
              value={searchQuery}
            />
          </Search>

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              onSelectAllClick={handleSelectAllClick}
              order={order}
              orderBy={orderBy}
              numSelected={selected.length}
              rowCount={filteredRows.length}
              onRequestSort={handleRequestSort} // ตรวจสอบว่า onRequestSort ถูกส่งเข้ามาใน EnhancedTableHead อย่างถูกต้อง
            />
            <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={row.id}
                >
                    <TableCell align="left">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AvatarGroup max={0}>
                          {/* มีรูปภาพ */}
                          {/*<Avatar alt={row.username} src={`/avatars/${row.id}.jpg`} />*/}
                          {/* ไม่มีรูปภาพ */}
                          <Avatar alt={row.username} src={<AccountCircleIcon />} /> 
                        </AvatarGroup>
                        <Box sx={{ ml: 1 }}>{row.username}</Box>
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.tel}</TableCell>
                    <TableCell align="left">{row.namebank}</TableCell>
                    <TableCell align="left">{row.rank}</TableCell>
                    <TableCell align="left">
                    <Chip
                      label={row.statused}
                      color={row.statused === 'active' ? 'success' : 'error'}
                    />
                    </TableCell>
                    <TableCell align="left">
                      <React.Fragment>
                    <IconButton
                      aria-controls={opened ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={opened ? 'true' : undefined} 
                      onClick={(event) => {
                        handlechoose(event, row.id);
                        event.stopPropagation();
                        setOpenDialog(true); 
                      }}
                    >
                      <MoreVertIcon/>
                    </IconButton>
                    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                      <DialogTitle>EDIT</DialogTitle>
                      <DialogContent>

                          <FormControl sx={{ m:1, minWidth:120}}>
                            <InputLabel>Rank</InputLabel>
                            <Select
                              native
                              value={rank}
                              onChange={handleChange}
                              input={<OutlinedInput label="Rank" />}
                            >
                              <option aria-label="None" value="" />
                              <option value={10}>Bronze</option>
                              <option value={20}>Silver</option>
                              <option value={30}>Gold</option>
                              <option value={40}>Platinum</option>
                            </Select>
                          </FormControl>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>Status</InputLabel>
                            <Select
                              native
                              value={statuse}  
                              onChange={handleChange} 
                              input={<OutlinedInput label="statuse" />}
                            >
                              <option aria-label="None" value="" />
                              <option value={10}>Active</option>
                              <option value={20}>Banned</option>
                            </Select>
                          </FormControl>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                      </DialogActions>
                    </Dialog>
                    </React.Fragment>
                    </TableCell>
                  </TableRow> 
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
        </>
      )}
      {currentView === 'addmin' && (
        <>
        <h1>ADMIN ACCOUNTS</h1>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2, backgroundColor:'#FEFAE0' }}>
          <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
              <TableHead 
              sx={{backgroundColor:'#e5db9c'}}             
              >
                <TableRow>
                  <TableCell >ชื่อผู้ใช้</TableCell>
                   <TableCell align="right">อีเมล</TableCell>
                   <TableCell align="right">รหัสผ่าน</TableCell>
                  <TableCell align="right">สถานะ</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {rowad.map((rowad) => (
            <TableRow
               hover
              tabIndex={-1}
              key={rowad.ida}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AvatarGroup max={0}>
                    {/* มีรูปภาพ */}
                    {/*<Avatar alt={row.username} src={`/avatars/${row.id}.jpg`} />*/}
                    {/* ไม่มีรูปภาพ */}
                  <Avatar alt={rowad.username2} src={<AccountCircleIcon />} /> 
                  </AvatarGroup>
                <Box sx={{ ml: 1 }}>{rowad.username2}</Box>
                </Box>
                    </TableCell>
                    <TableCell align="right">{rowad.email2}</TableCell>
                    <TableCell align="right">{rowad.password}</TableCell>
                    <TableCell align="right">
                    <Chip
                      label={rowad.statusad}
                      color={rowad.statusad === 'active' ? 'success' : 'error'}
                    />
              </TableCell>
              <TableCell align="left">
              <React.Fragment>
                    <IconButton
                      aria-controls={opened ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={opened ? 'true' : undefined} 
                      onClick={(event) => {
                        handlechoose(event, rowad.id);
                        event.stopPropagation();
                        setOpenDialog(true); 
                      }}
                    >
                      <MoreVertIcon/>
                    </IconButton>
                    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                      <DialogTitle>EDIT</DialogTitle>
                      <DialogContent>

                          <FormControl sx={{ m:1, minWidth:120}}>
                            <InputLabel>Rank</InputLabel>
                            <Select
                              native
                              value={rank}
                              onChange={handleChange}
                              input={<OutlinedInput label="Rank" />}
                            >
                              <option aria-label="None" value="" />
                              <option value={10}>Bronze</option>
                              <option value={20}>Silver</option>
                              <option value={30}>Gold</option>
                              <option value={40}>Platinum</option>
                            </Select>
                          </FormControl>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>Status</InputLabel>
                            <Select
                              native
                              value={statuse}  
                              onChange={handleChange} 
                              input={<OutlinedInput label="statuse" />}
                            >
                              <option aria-label="None" value="" />
                              <option value={10}>Active</option>
                              <option value={20}>Banned</option>
                            </Select>
                          </FormControl>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                      </DialogActions>
                    </Dialog>
                    </React.Fragment>
                    </TableCell>
                    
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </TableContainer>
            </Paper>
          </Box>
        </>
      )}
      </Box>
    </Box>
        </div>
    )
}
