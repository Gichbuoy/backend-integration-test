import requests

def get_eth_price():
    url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    response = requests.get(url)
    data = response.json()
    return data['ethereum']['usd']

if __name__ == "__main__":
    eth_price = get_eth_price()
    print(f"Current ETH price: ${eth_price}")
