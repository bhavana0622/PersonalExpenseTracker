

export default function Widget() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Personal Expense Tracker</h1>
      <div className="bg-card p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Welcome, User!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Spending</h3>
            <p className="text-primary text-xl font-bold">$500</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Spending by Category</h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-primary font-semibold">Food</p>
              <p className="text-primary">$200</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-primary font-semibold">Transportation</p>
              <p className="text-primary">$150</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-primary font-semibold">Entertainment</p>
              <p className="text-primary">$150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

