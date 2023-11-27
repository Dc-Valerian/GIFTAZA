import React from "react";
import styled from "styled-components";

interface User {
  username: string;
  email: string;
  phone: string;
  contact: string;
}

interface TableProps {
  users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const usersPerPage = 2;

  const offset = currentPage * usersPerPage;
  const currentUsers = users.slice(offset, offset + usersPerPage);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Name</StyledTableHeader>
            <StyledTableHeader>Email</StyledTableHeader>
            <StyledTableHeader>Number of GiftCard</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <StyledTableCell>{user.username}</StyledTableCell>
              <StyledTableCell>{user.email}</StyledTableCell>
              <StyledTableCell>{user.phone}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <StyledPagination>
        <StyledButton onClick={handlePrevClick} disabled={currentPage === 0}>
          Previous
        </StyledButton>
        <StyledSpan>
          {Array.from(Array(totalPages).keys()).map((page) => (
            <StyledButton
              key={page}
              onClick={() => setCurrentPage(page)}
              active={page === currentPage}
              aria-label={`Go to Page ${page + 1}`}
            >
              {page + 1}
            </StyledButton>
          ))}
        </StyledSpan>
        <StyledButton
          onClick={handleNextClick}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </StyledButton>
      </StyledPagination>
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  width: 95%;
`;

const StyledTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  background-color: #ddd;
  tbody tr:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

const StyledTableHeader = styled.th`
  padding: 0.75rem;
  text-align: left;
  background-color: #8A2BE2;
  color: white;
`;

const StyledTableCell = styled.td`
  padding: 0.75rem;
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledButton = styled.button<{ active?: boolean }>`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ active }) => (active ? "#F09E40" : "#d1d5db")};
  color: ${({ active }) => (active ? "white" : "black")};
  border: 1px solid ${({ active }) => (active ? "#F09E40" : "#d1d5db")};
  border-radius: 0.25rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover:not(:disabled) {
    background-color: #c9d1d9;
  }
`;

const StyledSpan = styled.span`
  margin: 0 0.5rem;
`;

export default Table;
