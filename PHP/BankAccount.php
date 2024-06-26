<?php
class BankAccount {
    private $accountNumber;
    private $balance;
    public function __construct($accountNumber) {
        $this->accountNumber = $accountNumber;
        $this->balance = 0;
    }
    public function deposit($amount) {
        $this->balance += $amount;
    }
    public function withdraw($amount) {
        if ($amount <= $this->balance) {
            $this->balance -= $amount;
        } else {
            echo "Insufficient balance.\n";
        }
    }
    public function getBalance() {
        return $this->balance;
    }
}
$randomDeposit = rand(1000, 9999);
$randomWithdraw = rand(1000, 9999);
// Create a bank account object
$account = new BankAccount("123456789");

$account->deposit($randomDeposit);
$account->withdraw($randomWithdraw);

echo "[ Account Balance : " . $account->getBalance() . "]\n";

?>