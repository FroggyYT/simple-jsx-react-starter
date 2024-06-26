import React, { useState, useEffect, useMemo } from 'react';

import APIStatus from '@/Components/APIStatus.jsx';

const App = () => {
	return (
		<>
			<div className="grid place-items-center h-full py-4">
				<h1 className="font-bold text-4xl">
					<APIStatus />
				</h1>
			</div>
		</>
	);
};

export default App;
