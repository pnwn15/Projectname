
import DataTable from 'react-data-table-component';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const columns = [
	{
		name: 'ID',
		selector: row => row.id,
    sortable: true,
    width: '100px'
	},
	{
		name: 'Coverimage',
		selector: row => row.coverimage,
    cell:row => <img src={row.coverimage} width={100}></img>,
    width: '150px'
	},
	{
		name: 'Name',
		selector: row => row.name,
    sortable: true,
    width: '150px'
	},
	{
		name: 'Detail',
		selector: row => row.detail,
    sortable: true,
    width: '750px'
	},
	{
		name: 'Latitude',
		selector: row => row.latitude,
    sortable: true,
    width: '100px'
	},
	{
		name: 'Longitude',
		selector: row => row.longitude,
    sortable: true,
    width: '100px'
	},
];

function Datatable() {
  const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1)
  const [sortColumn, setSortColumn] = useState('');
  const [sortColumnDir, setSortColumnDir] = useState('');
  const [search, setSearch] = useState('');


	const fetchData = async () => {
    setLoading(true);
  
    // ประกาศตัวแปร url เป็นสตริงพื้นฐาน
    let url = `http://localhost:5000/api/attractions?page=${page}&per_page=${perPage}&delay=1`;
    if (search) {
      url += `&search=${search}`;
    }
    // ตรวจสอบและเพิ่มพารามิเตอร์การจัดเรียง (ถ้ามี)
    if (sortColumn) {
      url += `&sort_column=${sortColumn}&sort_direction=${sortColumnDir}`;
    }

    try {
      const response = await axios.get(url);
      setData(response.data.data);
      setTotalRows(response.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
      // คุณสามารถเพิ่มการแจ้งเตือนข้อผิดพลาดสำหรับผู้ใช้ได้ที่นี่
    } finally {
      setLoading(false);
    }
};
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

	const handlePageChange = page => {
		setPage(page);
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		setPerPage(newPerPage);
	};
  const handleSort = async (column, sortDirection) => {
   setSortColumn(column.name)
   setSortColumnDir(sortDirection)
	};

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchData(); // ดึงข้อมูลใหม่ตามการค้นหา
};
  useEffect(() => {
  fetchData(); // เรียกทุกครั้งเมื่อ page, perPage, sortColumn, sortColumnDir, หรือ search เปลี่ยนแปลง
}, [page, perPage, sortColumn, sortColumnDir, search]);

	return (
    <div>
      <form onSubmit={handleSearchSubmit}>
  <label>
    Search:
    <input type="text" name="search" onChange={handleSearchChange}/>
  </label>
  <input type="submit" value="Submit" />
</form>
    
		<DataTable
			title="NEMMMMM"
			columns={columns}
			data={data}
      onSort={handleSort}
			progressPending={loading}
			pagination
			paginationServer
			paginationTotalRows={totalRows}
			onChangeRowsPerPage={handlePerRowsChange}
			onChangePage={handlePageChange}
		/>
    </div>
	);
};

export default Datatable
